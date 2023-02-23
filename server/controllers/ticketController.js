const {Ticket} = require('../models/models')
const ApiError = require('../error/ApiError')
class TicketController {
    async create(req, res,next) {
        try {
            const {title, price, description, typeId} = req.body
            const ticket = await Ticket.create({title,price,description,typeId})
            return res.json(ticket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let tickets
        return res.json(tickets)
    }


}
module.exports = new TicketController()