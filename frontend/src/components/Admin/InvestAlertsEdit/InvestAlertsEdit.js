import React, {useState,useEffect} from 'react';
import  {Card ,ListGroup,Table,Row,Col,Form} from 'react-bootstrap';
import InvestAlertsEditStyle from './InvestAlertsEdit.module.css';
import classNames from 'classnames';
import {
    DateTimePicker,
  } from "react-tempusdominus-bootstrap";
  

export default function InvestAlertsEdit(props) {

    const [inputTitle, setInputTitle] = useState([]);
    const [inputMessage, setInputMessage] = useState([]);
    
    const [updatedDate, setUpdatedDate] = useState();
    const [addedDate, setAddedDate] = useState(new Date());

  
    function onChangeHandler(event) 
    {
        setInputTitle({[event.target.name]: event.target.value});
        setInputMessage({[event.target.name]: event.target.value});

      };

      
      
      useEffect(() => {
    
            var titles=[];
            var messages=[];
            
            function setIntputs() {

                for (var i=0; i<props.data.data.length; i++ )
                            {
                        
                                titles.push(props.data.data[i].title);    
                                messages.push(props.data.data[i].message);   

                            }
                            setInputTitle(titles);
                            setInputMessage(messages);
                    }

         console.log(updatedDate);
            setIntputs();
      },[props.data.data,updatedDate]);



   function updateA(id)
   {
       var titre = document.getElementsByClassName("title"+id)[0].value;
       var message = document.getElementsByClassName("message"+id)[0].value;
     
       
       var newDate= new Date (updatedDate);
        console.log(newDate);

      props.updateAlert(id,titre,message,newDate);

      window.location.reload(false);  
       alert("Alerte mise à jour")
   }

   function deleteA(id)
   {
    props.deleteAlert(id);
    window.location.reload(false);

    alert("Alerte supprimé");
    
 }

 function addA()
 {
    var titre = document.getElementsByClassName("newTitle")[0].value;
    var message = document.getElementsByClassName("newMessage")[0].value;
    
    var newDate= new Date (addedDate);
    console.log(newDate);


   props.addAlert(titre,message,newDate);
   window.location.reload(false);

   alert("Alerte ajoutée");

 }
   return( 

            <Card >
                  <Card.Header style={{textAlign:"center"}}>Gestion des alertes</Card.Header>
                  <ListGroup.Item style={{padding: "0px"}}>

                 <Table table-active striped bordered hover responsive>
                    <thead className={classNames(InvestAlertsEditStyle.theadStyle)}>
                        <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody className={classNames(InvestAlertsEditStyle.whiteColor)}>

                    <tr className={classNames(InvestAlertsEditStyle.whiteColor)}>
                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}>0</td>

                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}><Form.Control type="text" className={'newTitle'}/></td>
                            
                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}> <Form.Control as="textarea"  className={'newMessage'}/></td>  

                            <td> 
                            <DateTimePicker onChange={e => setAddedDate(e.date)} locale="fr" defaultDate={addedDate} />
                            </td>

                            <td  className={classNames(InvestAlertsEditStyle.tdStyle,InvestAlertsEditStyle.whiteColor)}>                                   
                                <Row>
                                    <Col><button onClick={() => addA()}  type="button" className="btn">Add</button></Col>
                                </Row>
                            </td>
                        </tr>    
                  
                    {
                        props.data.data.map((alert, index) => (

                            <tr className={classNames(InvestAlertsEditStyle.whiteColor)}>
                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}>{index+1}</td>

                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}><Form.Control onChange={onChangeHandler} value={inputTitle[index]} name={"title"+alert._id} type="text" className={"title"+alert._id}/></td>
                            
                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}> <Form.Control  onChange={onChangeHandler} value={inputMessage[index]} name={"message"+alert._id} className={"message"+alert._id} as="textarea" /></td>  

                            <td> 
                            <span style={ {display: "none"}} className={"date"+alert._id}>{alert.alertDate}</span>        
                                <DateTimePicker onChange={e => setUpdatedDate(e.date)} locale="fr" defaultDate={new Date(alert.alertDate)} />
                            </td>
                            <td  className={classNames(InvestAlertsEditStyle.tdStyle,InvestAlertsEditStyle.whiteColor)}>                                   
                                <Row>
                                    <Col><button onClick={() => updateA(alert._id)} type="button" className="btn">Update</button></Col>
                                    <Col><button onClick={() => deleteA(alert._id)} type="button" className="btn">Delete</button></Col>
                                </Row>
                            </td>
                        </tr>        
                ))

                    }
                        
                       
                    </tbody>
                </Table>  
                </ListGroup.Item>

            </Card>
        )

        
}
