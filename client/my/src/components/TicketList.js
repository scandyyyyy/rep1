import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Form,Row} from "react-bootstrap";
import TicketItem from "./TicketItem";

const TicketList = observer (() => {
    const {ticket} = useContext(Context)
    return (
        <Row className="d-flex" >
            {ticket.tickets?.map(ticket =>
                <TicketItem key = {ticket.id} ticket={ticket}/>
            )}
        </Row>
    );
});

export default TicketList;