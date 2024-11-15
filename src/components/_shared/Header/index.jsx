import { useState } from 'react';

import WrapperComponent from '../Wrapper';
import { Link } from 'react-router-dom';

import { RiMenu3Fill, RiCloseLargeFill } from 'react-icons/ri';

export default function Header() {
  const [OpenNav, setOpenNav] = useState(false);
  const LinkRoute = [
    { label: 'Tentang', href: '/homepage' },
    { label: 'Galeri', href: '/our-galery' },
    { label: 'Daftar Kelas', href: '/class-list' },
    { label: 'Bantuan', href: '/help' },
    { label: 'Transaksi', href: '/booking-class' },
  ];
  return (
    <WrapperComponent className='shadow-md fixed z-[999999]'>
      <header className='w-full py-2 flex justify-between items-center z-[999999]'>
        <div className='w-[200px]'>
          <Link to={'/'}>
            <div className='w-[104px] h-[60px] bg-logo bg-cover ' />
          </Link>
        </div>
        <nav className='hidden lg:flex gap-10 '>
          {LinkRoute?.map((index, keyIndex) => (
            <Link
              key={keyIndex}
              className='font-medium text-base text-[#9a4b2c]'
              to={index?.href}
            >
              {index?.label}
            </Link>
          ))}
        </nav>
        <div className='w-[200px] hidden lg:flex gap-3 items-center'>
          <button className='bg-white text-[#9a4b2c] border-2 border-[#9a4b2c] py-2 px-6 text-xs rounded'>
            Register
          </button>
          <button className='bg-[#9a4b2c] text-white border-2 border-[#9a4b2c] py-2 px-6 text-xs rounded'>
            Login
          </button>
        </div>
        {OpenNav ? (
          <>
            <RiCloseLargeFill
              onClick={() => setOpenNav(false)}
              className='lg:hidden text-4xl text-red-600 z-[999999]'
            />
          </>
        ) : (
          <>
            <RiMenu3Fill
              onClick={() => setOpenNav(true)}
              className='lg:hidden text-4xl text-main'
            />
          </>
        )}
      </header>
      {OpenNav && (
        <div className='flex flex-col justify-between items-center w-[100vw] h-[100vh] overflow-auto fixed top-0 left-0 z-[99] bg-white pb-12'>
          <div className='h-[76px]' />
          <div className='flex flex-col gap-8 items-center text-center'>
            <Link
              onClick={() => {
                setOpenNav(false);
              }}
              className='font-medium text-base text-[#9a4b2c] w-full'
              to={'/'}
            >
              Home
            </Link>
            {LinkRoute?.map((index, keyIndex) => (
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                key={keyIndex}
                className='font-medium text-base text-[#9a4b2c] w-full'
                to={index?.href}
              >
                {index?.label}
              </Link>
            ))}
            <Link
              onClick={() => {
                setOpenNav(false);
              }}
              className='font-medium text-base text-[#9a4b2c] w-full'
              to={'/profile'}
            >
              Profile
            </Link>
          </div>
          <div className='w-screen flex flex-col gap-3 '>
            <button className='bg-white text-[#9a4b2c] border-2 border-[#9a4b2c] py-2 px-6 text-xl rounded w-[calc(100%-32px)] ml-4'>
              Register
            </button>
            <button className='bg-[#9a4b2c] text-white border-2 border-[#9a4b2c] py-2 px-6 text-xl rounded w-[calc(100%-32px)] ml-4'>
              Login
            </button>
          </div>
        </div>
      )}
    </WrapperComponent>
  );
}
