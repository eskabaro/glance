import ProductsService from "@/services/products/products.service"
import { Home } from "./Home"

export const revalidate = 300

const getData = async () => {
  const data = await ProductsService.getDataMainPage()

  return data
}

export default async function HomePage() {
  const { category, productsSales } = await getData()

  return <Home category={category} productsSales={productsSales} />
}
