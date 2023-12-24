type EntityInformation = {
   id: string
   createdAt: string
   updateAdt: string
}

export interface IProductIvetn {
   id: string
   type: string
}

export interface ICategory extends EntityInformation {
   category: string
   image: string
   slug: string
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
   categorySlug: string
   characteristics: string
   productIvetn: IProductIvetn[]
}

export interface IGetDataMainPageRes {
   category: ICategory[]
   productsSales: IProduct[]
}