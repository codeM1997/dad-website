import ServiceCard from '@/components/ServiceCard'
import { StarIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  const data = [{
    heading: 'Scaling',
    icon: <StarIcon className='mr-4' />,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
},{
  heading: 'Scaling',
  icon: <StarIcon className='mr-4' />,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
},{
  heading: 'Scaling',
  icon: <StarIcon className='mr-4' />,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
},{
  heading: 'Scaling',
  icon: <StarIcon className='mr-4' />,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
},{
  heading: 'Scaling',
  icon: <StarIcon className='mr-4' />,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
},{
  heading: 'Scaling',
  icon: <StarIcon className='mr-4' />,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, provident'
}]
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-2 lg:col-span-1 self-end p-4'>
          <div className='font-semibold text-6xl '> You can choose </div>
          <div className='text-primary font-semibold text-6xl'> our service</div>

        </div>
        <div className='col-span-2 lg:col-span-1 text-label self-end  p-4'>
          <div className='mb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ratione necessitatibus quis quaerat, sapiente tenetur ducimus a deleniti dolores soluta sint facere, eveniet beatae iure placeat tempore repellat doloremque quae!
          </div>
        </div>

      </div>
      <div className='mt-16 grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-6 p-2'>
          {data.map(el=>{
            return <ServiceCard key={el.heading} icon={el.icon} description={el.description} label={el.heading}/>
          })}
      </div>
    </div>
  )
}

export default index