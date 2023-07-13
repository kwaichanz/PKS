'use client'

import { fetchAPI } from '@/app/utils/fetchApi'
import Hero from '@/components/Hero/Hero'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

export default function Product({ }: Props) {
    const params = useParams()
    const bannerData: string[] = []

    const fetchProduct = async () => {
        try {
            const path = `/products`;
            const urlParamsObject = {
                populate: "image",
                pagination: {},
            };
            const responseData = await fetchAPI(path, urlParamsObject);
            console.log("responseData product", responseData);


        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div className="flex flex-col items-center relative select-none min-h-[1000px] ">
            <Hero bannerData={bannerData} isLoading={false} />
            <div>Products {params.id} </div>
        </div>
    )
}