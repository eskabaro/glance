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
}

export default new ProductService()