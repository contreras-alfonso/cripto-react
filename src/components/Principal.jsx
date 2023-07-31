import React from 'react'
import CriptoImagen from '../img/imagen-criptos.png'
import Formulario from './Formulario'
import { useEffect, useState } from 'react'
import { resultadoCripto } from '../data/monedas'
import Resultado from './Resultado'
import Spinner from './Spinner'

const Principal = () => {

  const [monedasBusqueda,setMonedasBusqueda] = useState({});
  const [resultado, setResultado] = useState({});
  const [spinner,setSpinner] = useState(false);

  useEffect(()=>{
        if(Object.keys(monedasBusqueda).length>0){

          const buscarDatosCripto = async()=>{
            setSpinner(true);
            setResultado({})
            const {criptomoneda,moneda} = monedasBusqueda;
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const response = await fetch(url); 
            const data = await response.json();
            setResultado(data.DISPLAY[criptomoneda][moneda]);
            setSpinner(false);
          }

          buscarDatosCripto();

        }
  },[monedasBusqueda])

  return (
    <div className='md:flex mt-20'>
        <div className='flex justify-center items-center mb-10 md:w-1/3'>
          <div className=' hover:border-dashed hover:border-2 hover:border-indigo-500 hover:rounded-lg  mx-3 h-fit'>
            <div className='flex justify-center items-center hover:bg-white rounded-xl transition hover:-translate-x-2 hover:-translate-y-2 border-2 border-indigo-500 hover:cursor-pointer'>
                <img src={CriptoImagen} alt="imagen cripto" />
            </div>
          </div>
        </div>
        <div className='md:w-2/3 mx-3' >
            <h1 className='text-center text-black text-4xl md:text-6xl font-black'>Cotiza <span className='text-indigo-500'>Criptomonedas</span> al instante</h1>
            <Formulario setMonedasBusqueda={setMonedasBusqueda}></Formulario>
            {spinner && <Spinner></Spinner>}
            {resultado.PRICE && <Resultado resultado={resultado}></Resultado> }
            
        </div>
    </div>
  )
}

export default Principal