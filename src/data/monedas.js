const monedas = [
    {id:'USD', nombre: 'Dolar de Estados Unidos'},
    {id:'MXN', nombre: 'Peso Mexicano'},
    {id:'EUR', nombre: 'Euro'},
    {id:'GBP', nombre: 'Libra Esterlina'},
]

const resultadoCripto = async (monedas) => {
    const {criptomoneda,moneda} = monedas;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const response = await fetch(url); 
    const data = await response.json();
    return data.DISPLAY[criptomoneda][moneda];
}

export {
    monedas,
    resultadoCripto,
}