import React, {useContext, useEffect} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import TicketList from "../components/TicketList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTickets, fetchTypes} from "../http/ticketAPI";

const Main = observer(() => {
    const {ticket} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>ticket.setTypes(data))
        fetchTickets(null).then(data =>{
            ticket.setTickets(data.rows)
        })
    }, [])

    useEffect(() => {
        fetchTickets(ticket.selectedType.id).then(data => {
            ticket.setTickets(data.rows)
        })
    }, [ticket.selectedType])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
             <Col md={9}>
                <TicketList/>
             </Col>
            </Row>
        </Container>


    );
});

export default Main;