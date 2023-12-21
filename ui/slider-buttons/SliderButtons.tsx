"use client"

import { FC } from "react"
import { useSwiper } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from '@react-spring/web'
import styles from './slide-buttons.module.scss'


export const SliderButtons: FC = () => {
   const swiper = useSwiper()
   const springs = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 500
   })

   return (
      <>
         <animated.button className={styles.button} onClick={() => swiper.slidePrev()} style={{ top: "81.5px", left: 10, ...springs }}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </animated.button>
         <animated.button className={styles.button} onClick={() => swiper.slideNext()} style={{ top: "81.5px", right: 10, ...springs }}>
            <FontAwesomeIcon icon={faChevronRight} />
         </animated.button>
      </>
   )

}