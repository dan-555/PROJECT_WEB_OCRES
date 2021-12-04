import React from 'react';
import  {Card ,ListGroup,} from 'react-bootstrap';
import InvestAlertsStyle from'./InvestAlerts.module.css'
import classNames from 'classnames';
let moment = require('moment');
require('moment/locale/fr.js');


export default function InvestAlerts(props) {

    var data = props.data;

    for (var i=0; i<data.data.length; i++)
    {
           var dateStringBefore=moment((data.data[i].alertDate).format);          
            data.data[i].alertDate=dateStringBefore.format('lll').toString();
    }
    
    return( 

    <Card>
                        <ListGroup.Item>Informations en live !</ListGroup.Item>
        <ListGroup variant="flush">          
        <div className={classNames(InvestAlertsStyle.scrollbar,InvestAlertsStyle.style1)} > 
            <div className={classNames(InvestAlertsStyle.forceOverflow)}> 
            {
                data.data.map((alert, index) => (
                    <ListGroup.Item key={index}>
                    <div className={classNames(InvestAlertsStyle.alertStyle)}>
                        <div className={classNames(InvestAlertsStyle.titleStyle)}>{alert.title}</div>
                        <div className={classNames(InvestAlertsStyle.messageStyle)}>{alert.message}</div>
                        <div className={classNames(InvestAlertsStyle.dateStyle)}>{alert.alertDate}</div>

                    </div>
                </ListGroup.Item>
                ))

            }
            </div> 
        </div> 
              
    
        </ListGroup>
          
      </Card>
        )
}
