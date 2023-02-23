import {makeAutoObservable} from "mobx";

export default class TicketStore {
    constructor() {
        this._types = []
        this._tickets = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setTickets(tickets) {
        this._tickets = tickets
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    get types() {
        return this._types
    }
    get tickets() {
        return this._tickets
    }
    get selectedType() {
        return this._selectedType
    }
}