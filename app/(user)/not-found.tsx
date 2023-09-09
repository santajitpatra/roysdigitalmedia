import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='  flex justify-center items-center max-w-full'>
            <div className='space-y-4 p-6 my-10 lg:my-16 xl:my-60'> <h2 className='text-2xl'>We couldn&apos;t find the page you were looking for. This is either because:
            </h2>

                <li>There is an error in the URL entered into your web browser. Please check the URL and try again.
                </li>
                <li>The page you are looking for has been moved or deleted.
                </li>
                <div className='pt-10'>
                    <Link
                        href="/"
                        className=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}