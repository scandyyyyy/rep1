import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createTicket = async (ticket) => {
    const {data} = await $authHost.post('api/ticket', ticket)
    return data
}

export const fetchTickets = async (typeId) => {
    const {data} = await $host.get('api/ticket', {params: {
            typeId
        }})
    return data
}


