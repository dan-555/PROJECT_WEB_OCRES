import React from 'react';
import EthDatas from '../EthDatas/EthDatas';
import EthChart from '../EthChart/EthChart';
import EthNews from '../EthNews/EthNews'
import  '../../GlobalCss/Card.css';

export default function Widgets() {
    return(

<div className="">
    <div className="container">

        <div className="row">
                
            <div className="col-4">
                <EthDatas/>
            </div>

            <div className="col-4">
                <EthChart/>
            </div>
           
            <div className="col-4">
                <EthNews/>
            </div>

        </div>
     </div>
</div>
        )
}
