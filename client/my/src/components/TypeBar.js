import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {ticket} = useContext(Context)
    return (
        <ListGroup>
            {ticket.types.map(type =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={type.id === ticket.selectedType.id}
                    onClick={()=> ticket.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>

            )}
        </ListGroup>
    );
});

export default TypeBar;