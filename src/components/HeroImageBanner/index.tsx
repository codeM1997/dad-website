import { Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';

const HeroImageBanner = () => {
    const articleData = [{
        time: 'Mar 16, 2020',
        heading: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus alias rem atque sequi nam nulla reprehenderit dolores illum in voluptates',
        name: 'Harry Potter',
        profession: "Engineer",
    }, {
        time: 'Mar 16, 2020',
        heading: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus alias rem atque sequi nam nulla reprehenderit dolores illum in voluptates',
        name: 'Raj Puttar',
        profession: "Engineer",
    },
    {
        time: 'Mar 16, 2020',
        heading: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus alias rem atque sequi nam nulla reprehenderit dolores illum in voluptates',
        name: 'Chota Bheem',
        profession: "Engineer",
    }]
    return (
        <>
            <div>
                <div className='grid grid-cols-2'>
                    <div className='col-span-2 lg:col-span-1 self-end p-4'>
                        <div className='font-semibold text-5xl lg:text-8xl '> Consult Your</div>
                        <div className='text-primary font-semibold text-5xl lg:text-8xl'> Dental Health</div>
                        <div className='text-primary font-semibold text-5xl lg:text-8xl'> Issue</div>

                        <div style={{ width: '80%' }} className='text-label mt-8 break-words text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti, suscipit fuga minus rem voluptatum.</div>
                        <div className='p-4 bg-primary inline-block rounded-full text-white mt-8 font-semibold'> Request an appointment</div>
                        <div className='block lg:hidden'>
                            <div className='p-4 inline-block cursor-pointer bg-teal-500 rounded-full text-white my-4'><a href='tel:+917003569494'>{`Call 9810557239`}</a></div>
                        </div>
                    </div>
                    <div className='col-span-2 lg:col-span-1 text-label self-center  p-4'>
                        <Image className='rounded-lg' style={{ width: '100%' }} src={'/hero-image-2.jpg'} width={400} height={100} alt='Logo' />
                    </div>

                </div>




            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">What our customers say about us</h2>
                    </div>
                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {articleData.map(el => {
                            return (<article key={el.name} className="border rounded-lg p-4 flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime="2020-03-16" className="text-gray-500">{el.time}</time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {el.heading}
                                        </a>
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{el.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                {el.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{el.profession}</p>
                                    </div>
                                </div>
                            </article>)
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroImageBanner