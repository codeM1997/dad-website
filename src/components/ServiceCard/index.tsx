import { StarIcon } from '@chakra-ui/icons'
import React from 'react'
interface ServiceCardInt {
    label?: string;
    description?: string;
    icon?: any;
}
const ServiceCard = ({ label, description, icon }: ServiceCardInt): JSX.Element => {
    
    return (
        <div className='border rounded p-4 m-1'>
            <div className='flex items-center mb-5'>
                {/* <StarIcon className='mr-4' /> */}{icon}
                <div className='text-xl'>{label}</div>
            </div>
            <div className='text-label break-words'>
                {description}
            </div>
        </div>
    )
}

export default ServiceCard