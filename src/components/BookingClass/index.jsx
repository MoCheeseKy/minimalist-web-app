import { useState } from 'react';
import dayjs from 'dayjs';

import Header from '../_shared/Header';
import Footer from '../_shared/Footer';
import WrapperComponent from '../_shared/Wrapper';
import WhatsappFloat from '../_shared/WhatsappFloat';
import { DatePicker, Select } from 'antd';

import { FiSearch } from 'react-icons/fi';

export default function BookingClassComponent() {
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Header />
      <WrapperComponent className='md:pb-24 pb-16'>
        <div id='cls' className='h-[76px]' />
        <div className='flex flex-col md:flex-row gap-12 mt-12'>
          <div className='flex flex-col gap-6 w-full max-w-[268px] bg-main text-white rounded-md p-6'>
            <div>
              <div className='text-xl mb-2'>Pilih Tanggal :</div>
              <DatePicker
                defaultValue={dayjs(new Date())}
                format={'dddd, MMMM YYYY'}
                className='w-full h-[48px]'
                onChange={onChangeDate}
              />
            </div>
            <div>
              <div className='text-xl mb-2'>Pilih Kategori :</div>
              <Select
                className='w-full h-[48px]'
                showSearch
                placeholder='Pilih Kategori Kelas'
                optionFilterProp='label'
                onChange={onChange}
                options={[
                  {
                    value: 'yoga-matras',
                    label: 'Yoga Matras',
                  },
                  {
                    value: 'yoga-aerial',
                    label: 'Yoga Aerial',
                  },
                  {
                    value: 'trx',
                    label: 'TRX',
                  },
                  {
                    value: 'muaythai',
                    label: 'Muaythai',
                  },
                ]}
              />
            </div>
            <div>
              <button className='w-full bg-main text-white border-2 border-white py-2 px-6 mt-2 text-xl rounded flex gap-4 items-center justify-center'>
                <FiSearch /> Cari Kelas
              </button>
            </div>
          </div>
          <div className='flex-grow grid grid-cols-2 gap-6'>
            {/*  */}
            <div className='border-2 border-main w-full h-fit p-6 rounded-md flex flex-col gap-2'>
              <div className='py-1 px-4 rounded-full border-[1px] border-main w-fit text-xs'>
                Muaythai
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-bold max-w-[60%]'>
                  Weekend Fun Flow Danta Yoga
                </p>
                <p className='bg-main text-white text-base py-2 px-8 rounded-2xl'>
                  09.00
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </WrapperComponent>
      <WhatsappFloat />
      <Footer />
    </>
  );
}
