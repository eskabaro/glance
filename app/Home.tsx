"use client"

import { FC } from "react";
import { Category } from "@/components/category-list/Category";
import { Stock } from "@/components/stock/Stock";
import { IGetDataMainPageRes } from "@/services/products/types";

interface IHomeProps extends IGetDataMainPageRes { }

export const Home: FC<IHomeProps> = ({ category, productsSales }) => {
   return (
      <main className="mb-75px">
         <Category category={category} />
         <Stock productsSales={productsSales} />
      </main>
   )
}