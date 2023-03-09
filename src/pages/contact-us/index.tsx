import React from 'react'

const index = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 self-start px-4'>
                    <div className='font-semibold text-5xl lg:text-6xl '> You can reach us </div>
                    <div className='text-primary font-semibold text-5xl lg:text-6xl'>within seconds</div>

                </div>
                <div className='col-span-2 lg:col-span-1 text-label self-center text-lg lg:text-2xl'>
                    <div className='border rounded-lg p-4 m-4'>
                        <span className='text-2xl lg:text-3xl text-black'> Address: </span> 101 Kailash Tower , Kaushambi Ghaziabad , Pincode: 201010
                    </div>
                    <div className='border rounded-lg p-4 m-4 text-lg lg:text-2xl'>
                        <span className='text-2xl lg:text-3xl text-black'> Phone Number: </span><a href='tel:+917003569494'> 9810557239</a>
                    </div>
                </div>

            </div>

            <div className='min-w-fit mt-4 lg:mt-16 rounded-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14005.99175705435!2d77.3190718!3d28.6448057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbfba34fb62d%3A0xc097ea8635f46078!2sDr%20Vipin%20Mittal&#39;s%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1678393124429!5m2!1sen!2sin" width="600" height="450" style={{ border: '0', width: '100%', padding: '16px' }} loading="lazy"></iframe>
            </div>



        </div>
    )
}

export default index