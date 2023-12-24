import { axiosInstance } from "../axios.instance"
import { ICategory, IGetDataMainPageRes, IProduct } from "./types"

class ProductService {
   async getDataMainPage(): Promise<IGetDataMainPageRes> {
      const [{ data: category }, { data: productsSales }] = await Promise.all([
         axiosInstance.get<ICategory[]>("category"),
         axiosInstance.get<IProduct[]>("products/sales")
      ])

      return { category, productsSales }
   }

   async getProducts(category?: string): Promise<IProduct[] | undefined> {
      const { data } = await axiosInstance.get<IProduct[] | undefined>(`products${category && `?category=${category}`}`)

      return data
   }

   async getCategoryBySlug(slug: string): Promise<ICategory | undefined> {
      const { data } = await axiosInstance.get<ICategory | undefined>(`category/${slug}`)

      return data
   }
}

export default new ProductService()