"use client"

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import styles from "./select.module.scss"

const options = [
   {
      name: "За рейтингом"
   },
   {
      name: "За популярньстю"
   },
   {
      name: "Від дешевих до дорогих"
   },
   {
      name: "Від дорогих до дешевих"
   }
]

export const Select: FC = () => {
   return (
      <div className={styles.wrapper}>
         <div>
            <FontAwesomeIcon icon={faArrowDown} height={12} color="#454545" />
            <FontAwesomeIcon icon={faArrowUp} height={12} color="#454545" />
         </div>
         <select className={styles.select} defaultValue={"За популярньстю"}>
            {options.map((item, index) => (
               <option key={index}>{item.name}</option>
            ))}
         </select>
      </div>
   )
}