"use client"

import { FC } from "react";
import { useRouter } from "next/navigation";
import { IGetDataMainPageRes } from "@/services/products/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderButtons } from "@/ui/slider-buttons/SliderButtons";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useReturnCountSlides } from "@/hooks/useReturnCountSlides";
import Image from "next/image"
import styles from "./category.module.scss"
import 'swiper/css'

interface ICategoryProps extends Pick<IGetDataMainPageRes, "category"> { }

export const Category: FC<ICategoryProps> = ({ category }) => {
   const { width } = useWindowSize()
   const { slidesPerView } = useReturnCountSlides(width)
   const { push } = useRouter()

   return (
      <section className={styles.wrapper} style={{ position: "relative", height: "100%" }}>
         <h1>Категорії</h1>
         <Swiper
            style={{
               position: "relative"
            }}
            slidesPerView={slidesPerView}
            spaceBetween={15}
            pagination={{
               clickable: true,
            }}
         >
            {category.map(item => (
               <SwiperSlide key={item.id} className={styles.slide} onClick={() => push(item.slug)}>
                  <div>
                     <Image src={item.image} width={200} height={211} alt={item.category} priority />
                  </div>
                  <h1>{item.category}</h1>
               </SwiperSlide>
            ))}
            <SliderButtons top="81.5px" />
         </Swiper>
      </section>
   )
}
