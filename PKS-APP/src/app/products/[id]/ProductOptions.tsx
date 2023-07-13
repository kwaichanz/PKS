import React, { useEffect } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

interface ProductOptionsProps {
    title: string;
    price: number;
    value: string;
    category_number: string;
    image?: any;
}

export const ProductOptions = (sizes: ProductOptionsProps[]) => {
    console.log("sizes", sizes);

    // useEffect(() => {
    //     const allSizes = sizes.map((size) => {
    //         size.title
    //     })
    //     console.log("allSizes", allSizes);
    // }, [])
    
    return (
        <form>
            <RadioGroup.Root
                className="grid grid-cols-5 gap-1 w-2/3 "
                defaultValue="default"
                aria-label="View density"
            >
                <div className="flex flex-col col-start-2 items-center gap-4">
                    <img src='/coffee.png' className='max-w-[30px] ' />
                    <RadioGroup.Item
                        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer"
                        value="default"
                        id="r1"
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
                    </RadioGroup.Item>
                    <label className="text-black text-[15px] leading-none " htmlFor="r1">
                        Short
                    </label>
                </div>
                <div className="flex flex-col col-start-3 items-center gap-4">
                    <img src='/coffee.png' className='max-w-[30px]' />

                    <RadioGroup.Item
                        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer"
                        value="comfortable"
                        id="r2"
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
                    </RadioGroup.Item>
                    <label className="text-black text-[15px] leading-none " htmlFor="r2">
                        Talls
                    </label>
                </div>
                <div className="flex flex-col col-start-4 items-center gap-4">
                    <img src='/coffee.png' className='max-w-[30px]' />

                    <RadioGroup.Item
                        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer"
                        value="compact"
                        id="r3"
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
                    </RadioGroup.Item>
                    <label className="text-black text-[15px] leading-none " htmlFor="r3">
                        Grande
                    </label>
                </div>
                {/* <div className="flex flex-col items-center gap-4">
                    <img src='/coffee.png' className='max-w-[30px]' />

                    <RadioGroup.Item
                        className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer"
                        value="compact"
                        id="r4"
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
                    </RadioGroup.Item>
                    <label className="text-black text-[15px] leading-none " htmlFor="r4">
                        Venti
                    </label>
                </div> */}
            </RadioGroup.Root>
        </form>
    )
}
