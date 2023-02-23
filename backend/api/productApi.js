const Router = require('express')
const bodyParser = require('body-parser');

const router = Router()

router.get('/getProduct',(req,res)=>{
    res.send({key:'test'})
})
router.post('/addProduct',bodyParser.json(),(req,res)=>{
    console.log('body : ',req.body)
})

module.exports = router