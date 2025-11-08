export type Autorization={
    isAutorization:boolean
}

export type ProductType={
    id: number,
    name: string,
    price: number,
    category: string,
}
export type FoodType = ProductType & {
    weight?: number,
    spiciness?: string
}
export type ClothesType = ProductType & {
    size?: number,
    color?: string
}
export type ElectronicType = ProductType & {
    brand?: string,
    inStock?: boolean
}

export type UnionProduct=FoodType|ClothesType|ElectronicType;

