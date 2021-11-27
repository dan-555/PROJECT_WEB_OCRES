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


                    </ListGroup>
            </Card>
       
    
        )
}
