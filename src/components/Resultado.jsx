import React from 'react'

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <div className='mx-auto md:w-3/4 flex flex-col md:flex-row gap-5 my-10 bg-white py-7 px-5 rounded-lg shadow-md'>
        <div className='md:w-1/3 flex justify-center items-center'>
            <img src={`https://cryptocompare.com/${IMAGEURL}`} className='rounded-md' alt="imagen" />
        </div>
        <div className='md:w-2/3 flex flex-col gap-2'>
            <h1 className='font-bold text-2xl text-center my-3'>Resultado de la búsqueda</h1>
            <p className='text-slate-500 font-bold text-xl'>El precio es de: <span className='font-normal text-black'>{PRICE}</span></p>
            <p className='text-slate-500 font-bold text-xl'>El precio más alto del día: <span className='font-normal text-black'>{HIGHDAY}</span></p>
            <p className='text-slate-500 font-bold text-xl'>El precio más bajo del día: <span className='font-normal text-black'>{LOWDAY}</span></p>
            <p className='text-slate-500 font-bold text-xl'>Variación últimas 24 horas: <span className='font-normal text-black'>{CHANGEPCT24HOUR}</span></p>
            <p className='text-slate-500 font-bold text-xl'>Última actualización: <span className='font-normal text-black'>{LASTUPDATE}</span></p>
        </div>
    </div>
  )
}

export default Resultado