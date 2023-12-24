"use client"

import { FC } from "react"
import { IProduct } from "@/services/products/types"
import { Select } from "@/ui/select/Select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListUl } from "@fortawesome/free-solid-svg-icons"
import { ProductItem } from "@/components/product-item/ProductItem"
import Image from "next/image"
import styles from "./category.module.scss"

interface ICategoryProps {
   data: IProduct[] | undefined
}

export const Category: FC<ICategoryProps> = ({ data }) => {
   console.log();

   return (
      <section>
         <div className={styles.sorting}>
            <Select />

            <div>
               <Image src={"/frame.png"} width={22} height={22} alt="" />
               <FontAwesomeIcon icon={faListUl} width={22} height={22} size="2x" />
            </div>
         </div>

         <main className={styles.wrapper_list}>
            <div className={styles.wrapper_list__sorting}>
               123
            </div>
            <div className={styles.wrapper_list__list}>
               {data?.length ? (
                  data.map(item => (
                     <ProductItem key={item.id} {...item} />
                  ))
               ) : (
                  <div className="text-center mt-56 text-dark_grey">
                     <h1>В цій категорії покищо немає товарів</h1>
                  </div>
               )}
            </div>
         </main>
      </section>
   )
}