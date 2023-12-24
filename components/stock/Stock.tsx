"use client"

import { FC, useMemo } from "react"
import { IGetDataMainPageRes } from "@/services/products/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { SliderButtons } from "@/ui/slider-buttons/SliderButtons"
import Image from "next/image"
import styles from './stock.module.scss'
import 'swiper/css'
import { ProductItem } from "../product-item/ProductItem"
import { useWindowSize } from "@/hooks/useWindowSize"
import { useReturnCountSlides } from "@/hooks/useReturnCountSlides"

interface IStockProps extends Pick<IGetDataMainPageRes, "productsSales"> { }

export const Stock: FC<IStockProps> = ({ productsSales }) => {
   const { width } = useWindowSize()
   const { slidesPerView } = useReturnCountSlides(width)

   return (
      <section className={styles.wrapper}>
         <h1>Акції</h1>
         <div className={styles.line} />
         <Swiper
            style={{
               position: "relative",

            }}
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={{
               clickable: true,
            }}
         >
            {productsSales.map(item => (
               <SwiperSlide key={item.id} className={styles.slide} onClick={() => { }}>
                  <ProductItem {...item} />
               </SwiperSlide>
            ))}
            <SliderButtons top="50%" />
         </Swiper>
      </section>
   )
}