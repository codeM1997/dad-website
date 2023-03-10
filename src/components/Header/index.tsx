import React from 'react';
import Image from 'next/image';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter();
    const menuData = [
        {
            label: 'Home',
            path: '/',
            key: '1'
        }, {
            label: 'Services',
            path: '/services',
            key: '1'
        }, {
            label: 'About Us',
            path: '/about-us',
            key: '3'
        }, {
            label: 'Contact Us',
            path: '/contact-us',
            key: '4'
        }]
    return (
        <div className='flex flex-row justify-between mb-16'>
            <div onClick={() => router.push('/')} className='flex flex-row mr-4 cursor-pointer' >
                <Image src={'tooth-logo.svg'} width={75} height={75} alt='Logo' />
                <span className='self-center text-primary font-bold text-xl'>{`Dr Mittal's Dental Clinic`}</span>
            </div>
            <div className='hidden lg:flex flex flex-row text-label self-center font-semibold'>
                {menuData.map((el: any) => {
                    return (<div className={`p-4 cursor-pointer ${router.pathname === el.path && 'bg-primary rounded-full text-white'}`} onClick={() => router.push(el.path)} key={el.key}>{el.label}</div>)
                })}
                { router.pathname !== '/contact-us' && <div className='p-4 ml-2 cursor-pointer bg-primary rounded-full text-white'><a href='tel:+917003569494'>{`Call 9810557239`}</a></div>}
            </div>
            <div className='flex lg:hidden  flex flex-row text-label self-center font-semibold mr-4'>
                <Menu strategy='fixed'>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />}>

                    </MenuButton>
                    <MenuList>
                        {menuData.map((el: any) => {
                            return (<MenuItem onClick={() => router.push(el.path)} key={el.label}>{el.label}</MenuItem>)
                        })}

                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default Header