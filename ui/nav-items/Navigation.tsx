import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import styles from "./navigations.module.scss"

export const Navigation: FC = () => {
   return (
      <nav className={styles.navigation}>
         <ul>
            <li>
               <FontAwesomeIcon icon={faListUl} width={20} height={20} color="#454545" />
               <span>Каталог</span>
            </li>
            <li>
               <FontAwesomeIcon icon={faCartShopping} width={20} height={20} color="#454545" />
               <span>Корзина</span>
            </li>
            <li>
               <FontAwesomeIcon icon={faUser} width={20} height={20} color="#454545" />
               <span>Профіль</span>
            </li>
         </ul>
      </nav>
   )
} 