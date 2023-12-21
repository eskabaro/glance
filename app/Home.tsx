"use client"

import { Category } from "@/components/category/Category";
import { IGetDataMainPageRes } from "@/services/products/types";
import { FC } from "react";

interface IHomeProps extends IGetDataMainPageRes { }

export const Home: FC<IHomeProps> = ({ category, productsSales }) => {
   return (
      <main className="">
         <Category category={category} />
      </main>
   )
}