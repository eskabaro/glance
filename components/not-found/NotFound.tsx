"use client"

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export const NotFound: FC = () => {
   const { replace } = useRouter()

   return (
      <main className="h-full flex justify-center items-center flex-col">
         <h1 className="mb-6 text-h1 font-medium">Помилка 404</h1>
         <Image src={"/illustrations.png"} width={307} height={339} alt="Помилка 404" />
         <p className="text-h2 font-normal" style={{ color: "#454545" }}>Перезавантажте сторінку або перевірте</p>
         <p className="text-h2 font-normal mb-6" style={{ color: "#454545" }}>з'єднання з інтернетом</p>
         <Button width="fit-content" func={() => replace("/")}>
            <FontAwesomeIcon icon={faChevronLeft} color="#fff" /> <p>На головну</p>
         </Button>
      </main>
   )
}