"use client"

import { FC } from "react"
import { Navigation } from "@/ui/nav-items/Navigation"
import { NextFont } from "next/dist/compiled/@next/font"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import cn from "classnames"
import styles from "./header.module.scss"

interface IHeaderProps {
   font: NextFont
}

export const Header: FC<IHeaderProps> = ({ font }) => {
   return (
      <div className={styles.wrapper}>
         <header className={styles.header}>
            <Link href={"/"}>
               <h1 className={cn(font.className, styles.header__logo)}>GLANCE</h1>
            </Link>
            <div className={styles.header__input_box}>
               <FontAwesomeIcon icon={faMagnifyingGlass} color="#454545" width={20} height={20} />
               <input type="text" placeholder="Пошук" />
            </div>

            <div className={styles.header__navigation}>
               <Navigation />
            </div>
         </header>
      </div>
   )
}