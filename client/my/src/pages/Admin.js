import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTicket from "../components/modals/CreateTicket";

const Admin = () => {
    const [ticketVisible,setTicketVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2 p-2" onClick={()=>setTicketVisible(true)}>Добавить билет</Button>
            <CreateTicket show={ticketVisible} onHide={()=>setTicketVisible(false)}/>
        </Container>
    );
};

export default Admin;