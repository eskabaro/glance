import { useMemo } from "react"

export const useReturnCountSlides = (width: number | null) => {
   const slidesPerView = useMemo(() => {
      if (width !== null) {
         if (width >= 1200) {
            return 6
         } else if (width >= 1020) {
            return 5
         } else if (width >= 800) {
            return 4
         } else if (width >= 620) {
            return 3
         } else {
            return 2
         }
      }
      return 3
   }, [width])

   return { slidesPerView }
}