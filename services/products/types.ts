type EntityInformation = {
   id: string
   createdAt: string
   updateAdt: string
}

export interface ICategory extends EntityInformation {
   category: string
   image: string
}

export interface IProduct extends EntityInformation {
   mainImage: string
   images: string[]
   title: string
   price: string
   sale: string | null
   color: string | null
   inStock: "0" | "1"
   stars: number
   category: string
   characteristics: string
}

export interface IGetDataMainPageRes {
   category: ICategory[]
   productsSales: IProduct[]
}