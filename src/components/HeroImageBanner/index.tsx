import { Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';

const HeroImageBanner = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 self-end p-4'>
                    <div className='font-semibold text-8xl '> Consult Your</div>
                    <div className='text-primary font-semibold text-8xl'> Dental Health</div>
                    <div className='text-primary font-semibold text-8xl'> Issue</div>

                    <div style={{ width: '80%' }} className='text-label mt-8 break-words text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti, suscipit fuga minus rem voluptatum.</div>
                    <div className='p-4 bg-primary inline-block rounded-full text-white mt-8 font-semibold'> Request an appointment</div>
                    <div className='block lg:hidden'>
                        <div className='p-4 inline-block cursor-pointer bg-teal-500 rounded-full text-white my-4'>{`Call 9810557239`}</div>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1 text-label self-center  p-4'>
                    <Image className='rounded-lg' style={{ width: '100%' }} src={'/hero-image-2.jpg'} width={400} height={100} alt='Logo' />
                </div>

            </div>

        </div>
    )
}

export default HeroImageBanner