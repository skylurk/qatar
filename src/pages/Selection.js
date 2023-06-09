import { Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Selection = () => {
    return (
        <div className='min-h-screen w-full bg-gray-50 flex flex-col items-center gap-3'>

            {/* IMAGE AREA  */}
            <div className="w-full flex justify-center">
                <img src="/images/qt.png" alt="" width={'200px'} />
            </div>

            {/* TITLE AREA */}
            <div className="px-5 text-center w-2/3 flex flex-col gap-3">
                <h2 className='text-3xl font-semibold'>WIN WITH QATAR AIRWAYS</h2>
                <h3 className='text-sm  text-gray-500 font-semibold'>You can win by selecting to answer the Quick Fire Questions or try your luck on spin the wheel.</h3>
            </div>

            
            <div className="w-2/3 h-400px flex flex-row gap-2 mt-5">
                <Card className='w-1/2'>
                    <h2 className='text-[#5C0632] font-bold'>Spin The Wheel</h2>
                    <span>Spin the lucky wheel and stand a chance to win great prizes</span>
                    <Link to='/spin' type="submit" className="focus:outline-none text-white text-center bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900">Spin</Link>

                </Card>
                <Card className='w-1/2'>
                    <h2 className='text-[#5C0632] font-bold'>Quick Fire Questions</h2>
                    <p>Win amazing prizes for answering the Quick Fire Questions Correctly</p>
                    <Link to='/qr' type="submit" className="focus:outline-none text-white bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-sm px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900">Answer</Link>
                </Card>
            </div>



        </div>
    )
}

export default Selection