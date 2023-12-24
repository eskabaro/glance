"use client"

import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'
import { Button } from "@/ui/button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { IProduct } from "@/services/products/types"
import Image from "next/image"
import styles from './product-item.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'

interface IProductItemProps extends IProduct { }

export const ProductItem: FC<IProductItemProps> = ({ images, title, price, sale, inStock, productIvetn }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.wrapper__ivents_box}>
            {productIvetn && productIvetn.map(item => (
               <div key={item.id} className={styles.wrapper__sale}>
                  <span>{item.type}</span>
               </div>
            ))}
         </div>
         <Swiper
            modules={[Pagination]}
            cssMode
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
               clickable: true
            }}
         >
            {images.map((item, index) => (
               <SwiperSlide key={index} className={styles.slide}>
                  <div className={styles.image_box}>
                     <Image src={item} style={{ objectFit: "contain", margin: "auto" }} width={169} height={216} alt="" />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <h1>{title}</h1>
         <div className={styles.wrapper__price}>
            <h1>{price} грн.</h1>{sale && (<span>{sale} грн.</span>)}
         </div>
         <div className={styles.wrapper__favorits}>
            {inStock === "1" ? (
               <h3>В наявності</h3>
            ) : (
               <h3 className="text-gray">Не в наявності</h3>
            )}
            <button>
               <FontAwesomeIcon icon={faHeart} width={20} height={20} color="#454545" />
            </button>
         </div>
         <Button width="100%" func={() => { }}>В корзину</Button>
      </div>
   )
}