import prisma from "./prisma";
import { cache } from "react";

export const getCategory = cache(async (slug: string) => {
    return await prisma.productCategory.findFirst({ where: { slug }, include: { products: true } })
})

export const getProduits=cache(async (slug:string)=>{
    return await prisma.product.findUnique({where :{}})
})