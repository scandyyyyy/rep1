import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const TicketItem = ({ticket}) => {

    return (
        <Col md={10} >
           <Card style={{width:1080,cursor:'pointer'}} border={"light"} className="mb-3">
               <div className="d-flex justify-content-between mb-3 align-items-center" >

                    <div>{ticket.title}</div>
                    <div>{ticket.description}</div>
                    <div>{ticket.price} рублей</div>
                    <Button> Купить </Button>

               </div>
           </Card>
        </Col>
    );
};

export default TicketItem;