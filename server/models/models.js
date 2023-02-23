const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},

})
const Type = sequelize.define('type',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type:DataTypes.STRING,unique: true,allowNull:false},
})


const Basket = sequelize.define('basket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})
const BasketTicket = sequelize.define('basket_ticket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})
const Ticket = sequelize.define('ticket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    description: {type:DataTypes.STRING, allowNull:false},
    price: {type:DataTypes.INTEGER, allowNull:false},
    title: {type:DataTypes.STRING, allowNull:false},

})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketTicket)
BasketTicket.belongsTo(Basket)

Ticket.hasMany(BasketTicket)
BasketTicket.belongsTo(Ticket)

Type.hasMany(Ticket)
Ticket.belongsTo(Type)

module.exports = {
    User, BasketTicket, Basket, Ticket, Type
}
