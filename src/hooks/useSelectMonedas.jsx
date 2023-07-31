import {useState} from 'react'

const useSelectMonedas = (textoLabel,options) => {

    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <label className='block text-slate-500 font-black text-lg'>{textoLabel}</label>
            <select value={state} onChange={(e)=>{setState(e.target.value)}} id="moneda" className='w-full py-3 px-4 rounded-lg bg-slate-100 border'>
                    <option value="">Seleccione</option>
                    {options.map(e=>(
                        <option key={e.id} value={e.id}>{e.nombre}</option>
                    ))}
            </select>
        </>
    )

    return [state,SelectMonedas]
}

export default useSelectMonedas