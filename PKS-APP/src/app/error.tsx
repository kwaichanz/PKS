'use client' // Error components must be Client Components

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex w-screen h-[600px] items-center justify-center text-4xl'>
            <h2>Something went wrong!</h2> &nbsp;
            <p>Please {" "} <a className='text-red-500' href="/">try again</a></p>
        </div>
    )
}