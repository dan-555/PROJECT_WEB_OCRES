import React from 'react';
import  {Card ,ListGroup} from 'react-bootstrap';
import MetamDatasStyle from './MetamDatasStyle.css';
import classNames from 'classnames';


export default function MetamDatas(props) {
    //var Newprice = Math.round(props.data[0].price * 100) / 100;

   console.log(props.dataBalance);
   console.log(props.dataGas);
   console.log(props.dataTime);

    return( 

            <Card className ="h100" >
                    <ListGroup variant="flush">

                    <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                BALANCE : {props.dataBalance.result} 
                                </div>
                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Transaction time : {props.dataTime.result} seconds
                                </div>
                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Fast Gas Price : {props.dataGas.result.FastGasPrice} 
                                </div>

                                <br></br><br></br>

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Proposed Gas Price : {props.dataGas.result.ProposeGasPrice} 
                                </div>

                                <br></br><br></br>

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Safe Gas Price : {props.dataGas.result.SafeGasPrice} 
                                </div>

                                <br></br><br></br>

                                <div>(fee in gwei)</div>

                            </div>

                        </ListGroup.Item>

                    </ListGroup>
            </Card>
       
    
        )
}
