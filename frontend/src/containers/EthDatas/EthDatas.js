import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoDatas from '../../components/CryptoDatas/CryptoDatas';


export default function EthDatas() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        
            const result = await axios(
                `https://api.nomics.com/v1/currencies/ticker?key=0b1c1ec2913ffaccdf0549b473b97d87f6e8b716&ids=ETH&interval=1d,30d&convert=USD&per-page=100&page=1`,
            );

            setData(result.data);
        };
        fetchData();

    })
    console.log(typeof data);

    //console.log(data);
    if (data.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;
    return (
        <div>
            <CryptoDatas data={data}/>
        </div>
    )
}
