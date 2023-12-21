"use client"

import { FC, PropsWithChildren } from "react"
import styles from './button.module.scss'

interface IButtonProps extends PropsWithChildren<unknown> {
   func: () => void
}

export const Button: FC<IButtonProps> = ({ func, children }) => {
   return (
      <button onClick={func} className={styles.button}>
         {children}
      </button>
   )
}