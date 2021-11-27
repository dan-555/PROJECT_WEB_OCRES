import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MetamDatas from '../../components/MetamDatas/MetamDatas';


export default function Metamask() {
   
    //const [data, setData] = useState([]); //Portefeuille à notre adresse
    //const [dataGas, setGas] = useState([]);//Frais transaction suggérés sur ETH en live (en GWEI)
    //const [dataTime, setTime] = useState([]);//Temps de transaction moyen estimé sur ETH en live (en secondes)

    const [data, setData] = useState([]);//Temps de transaction moyen estimé sur ETH en live (en secondes)

    useEffect(() => {
       
        //fonctionnel
        const fetchData = async () => {
        
            const result = await axios(
                'https://api.etherscan.io/api?module=account&action=balance&address=0x6bC26E853086CF244849D3780eC5C4BF80106410&tag=latest&apikey=GCJDGGPK7KCWABIFNZ634YT3F8NMJX8TZW', //results in wei
                );

            setData(result.data);
            console.log(data);
        };
       
        /* const fetchData1 = async () => {
        
            const result = await axios(
                'https://api.etherscan.io/api?module=account&action=balance&address=0x6bC26E853086CF244849D3780eC5C4BF80106410&tag=latest&apikey=GCJDGGPK7KCWABIFNZ634YT3F8NMJX8TZW', //results in wei
                ); //"result" est en wei (10^-18eth)

            setData(result.data);
            console.log(data);
        };

       /* const fetchData2 = async () => {
        
            const resultGas = await axios(
                `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=GCJDGGPK7KCWABIFNZ634YT3F8NMJX8TZW`, 
                //"SafeGasPrice","ProposeGasPrice","FastGasPrice", (en gwei 10^-9)
            );

            setGas(resultGas.dataGas);
            console.log(dataGas);
        };*/

       /* const fetchData3 = async () => {
        
            const resultTime = await axios(
                `https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=GCJDGGPK7KCWABIFNZ634YT3F8NMJX8TZW`,// "result" (en secondes)
            );

            setTime(resultTime.dataTime);
            console.log(dataTime);
        };*/

        
        fetchData();
        //fetchData2();
        //fetchData3();

    },[])

   /* if (data.status===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;
    /*if (dataGas.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;*/
    /*if (dataTime.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;  */

    return (
        <div>

        </div>
    )
}
