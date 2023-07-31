import { useEffect,useState } from 'react';
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas, resultadoCripto } from '../data/monedas';
import Error from './Error';

const Formulario = ({setMonedasBusqueda}) => {


    const [criptos,setCriptos] = useState([]);
    const [error,setError] = useState(false);

    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas);
    const [criptomoneda,SelectCriptoMoneda] = useSelectMonedas('Elige tu criptomoneda',criptos);


    useEffect(()=>{
        const consultarAPI = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await fetch(url);
            const data = await response.json();

            const arrayCriptos = data.Data.map(e=>{
                const objetoCripto = {
                    id: e.CoinInfo.Name,
                    nombre: e.CoinInfo.FullName
                }
                return objetoCripto;
            });

            setCriptos(arrayCriptos);
        }

        consultarAPI();
        
    },[])

    const handleSubmit = async(e)=>{

        e.preventDefault();

        if([moneda,criptomoneda].includes('')){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        const objetoMonedas = {
            moneda,
            criptomoneda,
        }

        setMonedasBusqueda(objetoMonedas);

    }


    

  return (
    <>
       {error && <Error></Error>}
        <form onSubmit={handleSubmit} className='md:w-3/4 md:mx-auto rounded-lg shadow-md py-10 px-5 flex flex-col gap-4  mt-16 transition bg-white mb-5'>
            
            <SelectMonedas></SelectMonedas>
            <SelectCriptoMoneda></SelectCriptoMoneda>

            <button type='submit' className='mt-5 rounded-lg py-3 font-black text-lg text-white bg-indigo-500 hover:bg-indigo-600 uppercase'>Calcular</button>

        </form>

    </>
  )
}

export default Formulario