import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema} from './validation';
import { useAppDispatch} from '../../hooks/redux';
import { loginIn } from '../../slices/autorization';
import './style.less'

export default function Form(){
    const dispatch = useAppDispatch()

    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });
    

    const onSubmit = () => {
       dispatch(loginIn());
       window.localStorage.setItem("autorization", "true");
    };

    return(
        <>
        <div className='form-autorization'>
        <label>Форма авторизации</label>
         <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register("email")} placeholder="Email" className='input-email' />
            {errors.email && <span className='error error-email'>{errors.email.message}</span>}
            <input  {...register("password")} placeholder="Password" type="password" className='input-password' />
            {errors.password && <span className='error error-password'>{errors.password.message}</span>}
            <button type="submit">Отправить</button>
        </form>
        </div>
         
        </>
    )
}