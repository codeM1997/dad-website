import { Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 self-end p-4'>
                    <div className='text-primary font-semibold text-xl mb-4'>{`Welcome to Dr Vipin Mittal's Clinic`}</div>
                    <div className='font-semibold text-6xl mb-6'> We Care About Your</div>
                    <div className='text-primary font-semibold text-6xl'> Dental Health</div>

                </div>
                <div className='col-span-2 lg:col-span-1 text-label self-end  p-4'>
                    <div className='mb-6'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ratione necessitatibus quis quaerat, sapiente tenetur ducimus a deleniti dolores soluta sint facere, eveniet beatae iure placeat tempore repellat doloremque quae!
                    </div>
                    <div>
                        <Button colorScheme='primary' size='lg'>
                            Request an appointment
                        </Button>
                    </div>

                </div>

            </div>
            <div className='grid grid-cols-12 p-4 gap-4 mt-16'>
                <div className='col-span-4 self-center'>
                    <Image style={{width:'100%'}} src={'/hero-image.jpg'} width={400} height={100} alt='Logo'  />
                </div>
                <div className='col-span-5 flex flex-col justify-between self-center'>
                    <Image style={{width:'100%'}} className='p-2' src={'/hero-image-2.jpg'} width={400} height={100} alt='Logo' />
                    <Image style={{width:'100%'}} className='p-2' src={'/hero-image-3.jpg'} width={400} height={100} alt='Logo' />

                </div>
                <div className='col-span-3 self-center'>
                    <Image style={{width:'100%'}} className='p-2' src={'/hero-image-4.jpg'} width={400} height={100} alt='Logo' />

                </div>

            </div>

        </div>
    )
}

export default HeroBanner