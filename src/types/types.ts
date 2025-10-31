export type autorization={
    isAutorization:boolean
}

export type FoodType={
    id: number,
    name: string,
    price: number,
    category: string,
    weight: number,
    spiciness: string
}
export type ClothesType = Omit<FoodType, "weight"|"spiciness"> & {
    size: number,
    color: string
}
export type ElectronicType = Omit<FoodType, "weight"|"spiciness"> & {
    brand: string,
    inStock: boolean
}

