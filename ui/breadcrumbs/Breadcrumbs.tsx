"use client"

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.scss"
import cn from "classnames"
import Link from "next/link";

interface IBreadcrumbsProps {
   data: {
      name: string
      url: string
   }[]
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ data }) => {
   const pathname = usePathname().replace(/^\/+/, '')

   return (
      <div className={styles.wrapper}>
         {data.map((item, index) => (
            <React.Fragment key={index}>
               <Link href={item.url} className={cn(styles.link, {
                  [styles.active]: item.url === pathname
               })}>{item.name}</Link>
               {index !== data.length - 1 && <span className="text-gray">/</span>}
            </React.Fragment>
         ))}
      </div>
   )
}