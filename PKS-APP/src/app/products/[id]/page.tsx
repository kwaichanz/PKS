'use client'

import { getStrapiMedia, getStrapiURL } from '@/app/utils/api-helpers'
import { bubblegum } from '@/app/utils/fonts'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProductOptions } from './ProductOptions'

type Props = {}

type TProduct = {
    product_number: string;
    title: string;
    description: string;
    image: any;
    product_type: string;
    product_serve_type: string;
    size: any;

}

export default function Product({ }: Props) {
    const params = useParams()
    const bannerData: string[] = [];
    const [productData, setProductData] = useState<TProduct>()
    const [isLoading, setIsLoading] = useState(true)

    const fetchProduct = async () => {
        try {
            const path = `/products`;
            // const urlParamsObject = {
            //     populate: "*",
            //     filters: `[id][$eq]=${params.id}`,
            //     pagination: {},
            // };
            // const responseData = await fetchAPI(path, urlParamsObject);
            const queryString = `filters[id][$eq]=${params.id}`;
            const requestUrl = `${getStrapiURL(
                `/api${path}${queryString ? `?${queryString}` : ""}`
            )}`;
            const responseData = await fetch(requestUrl);
            const data = await responseData.json();
            console.log("data", data);

            const extractedData = data.data[0].attributes;
            console.log("extractedData", extractedData);

            setProductData(extractedData)
            console.log("productData", productData);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)

        }
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <main className="flex flex-col items-center relative select-none min-h-[1000px] ">

            <section className='h-14 w-full bg-brown3 flex items-center pl-32 capitalize'>
                Menu / {productData?.product_type} / {productData?.product_serve_type} /&nbsp; <span className='font-semibold'>{productData?.title}</span>
            </section>
            <section className={`w-full bg-grass6 text-white ${bubblegum.className} h-[400px]`}>
                {!isLoading && (

                    <div className='grid grid-cols-3 h-full items-center'>
                        <div className='flex justify-center h-full items-center'>

                            <Image
                                src={String(getStrapiMedia(productData?.image.data.attributes.url))}
                                width={400}
                                height={400}
                                alt="Picture of the author"
                                unoptimized
                            />

                        </div>
                        <div className='ml-24'>
                            <h1 className='text-5xl'>{productData?.title}</h1>
                        </div>
                        <div></div>
                    </div>
                )}

            </section>

            <section className='w-full '>
                <div className='grid grid-cols-3 h-[400px] items-center'>
                    <div className='flex flex-col p-10 pl-28  h-full w-full gap-16 '>
                        <div>
                            <h1 className='text-3xl font-semibold'>
                                Size Options
                            </h1>
                        </div>
                        <div>
                            <ProductOptions sizes={productData?.size} />
                        </div>
                    </div>
                    <div className='flex flex-col p-10 pl-28  h-full w-full gap-10'>
                        <div>
                            <h1 className='text-3xl font-semibold'>Details</h1>
                        </div>
                        <div>
                            <p className='font-semibold'>
                                {productData?.description}
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>

            </section>

        </main>
    )
}