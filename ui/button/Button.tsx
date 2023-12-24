"use client"

import { FC, PropsWithChildren } from "react"
import cn from "classnames"
import styles from './button.module.scss'

interface IButtonProps extends PropsWithChildren<unknown> {
   func: () => void,
   width: "fit-content" | "100%"
   shadow?: boolean
}

export const Button: FC<IButtonProps> = ({ func, children, width, shadow }) => {
   return (
      <button onClick={func} className={cn(styles.button, {
         [styles.shadow]: shadow
      })} style={{ width }}>
         {children}
      </button>
   )
}