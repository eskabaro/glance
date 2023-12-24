import ProductsService from "@/services/products/products.service"
import { Category } from "./Category"

export const generateStaticParams = async () => {
   const { category } = await ProductsService.getDataMainPage()

   return category.map(item => ({
      category: item.category
   }))
}

const getProductsByGategory = async (category: string) => {
   const data = await ProductsService.getProducts(category)

   return data
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
   const data = await getProductsByGategory(params.category)

   return <Category data={data} />
}