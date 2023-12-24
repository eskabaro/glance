import ProductsService from "@/services/products/products.service"
import styles from "./layout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faArrowsUpDown, faListUl } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/ui/breadcrumbs/Breadcrumbs"
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import { Select } from "@/ui/select/Select"
import Image from "next/image"

const getCategory = async (slug: string) => {
  const data = await ProductsService.getCategoryBySlug(slug)

  return data
}

export default async function CategoryLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { category: string }
}) {
  const data = await getCategory(params.category)

  return (
    <main className={styles.wrapper}>
      <nav>
        <Breadcrumbs data={[{ name: "Головна", url: "/" }, { name: data?.category!, url: params.category }]} />
        <Link href={"/"} className={styles.heading}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" width={13} height={26} />
          <h1>{data ? data?.category : "Всі товари"}</h1>
        </Link>
      </nav>
      {children}
    </main>
  )
}
