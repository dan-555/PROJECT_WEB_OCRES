import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MetamDatas from '../../components/MetamDatas/MetamDatas';


export default function Metamask() {
   
    const [data, setData] = useState([]); //Portefeuille à notre adresse
    //const [dataGas, setGas] = useState([]);//Frais transaction suggérés sur ETH en live (en GWEI)
    //const [dataTime, setTime] = useState([]);//Temps de transaction moyen estimé sur ETH en live (en secondes)


    useEffect(() => {
       
        
        //fonctionnel : Wallet Balance
        const fetchData = async () => {
        
            const result = await axios(
                'https://api.etherscan.io/api?module=account&action=balance&address=0x6bC26E853086CF244849D3780eC5C4BF80106410&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4', //results in wei
                );

            setData(result.data);
             console.log(result);
        };
       

        const fetchData2 = async () => {
        
            const resultGas = await axios(
                `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=J4YRQYN2TA4RFTSFU9KC2B8YA3ZW9BW888`, 
                //"SafeGasPrice","ProposeGasPrice","FastGasPrice", (en gwei 10^-9)
            );

            setData(resultGas.data);
            console.log(resultGas);
        };

        const fetchData3 = async () => {
        
            const resultTime = await axios(
                `https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=HBE5A1TV3KITG8W1FNZSSHFVI8DE3FM8XQ`,// "result" (en secondes)
            );

           setData(resultTime.data);
           console.log(resultTime);
        };
        
        fetchData();
        fetchData2();
        fetchData3();

       /* console.log(data);
        console.log(data2);
        console.log(data3);

       /*while(data.length===0 || data2.length===0 || data3.length===0 ){

        console.log("LOADIUNG");

        fetchData();
        fetchData2();
        fetchData3();

        }*/

    },[])


    return (
        <div>

        </div>
    )
}
