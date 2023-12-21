"use client"

import { FC } from "react"
import { Navigation } from "@/ui/nav-items/Navigation"
import styles from "./tabs.module.scss"

export const Tabs: FC = () => {
   return (
      <div className={styles.wrapper}>
         <Navigation />
      </div>
   )
} 