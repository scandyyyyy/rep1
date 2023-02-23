const Router = require('express')
const router = new Router()
const ticketRouter = require('./ticketRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')



router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/ticket', ticketRouter)


module.exports = router