const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(cors())

//model
const ProductsModel = new mongoose.model("exam",

    new mongoose.Schema({
        name: String,
        title: String,
        price: Number,
        img: String
    })
)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
//Crud
app.get('/products', async (req, res) => {
    const products = await ProductsModel.find({})
    res.send(products)
})
app.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const product = await ProductsModel.findById(id)
    res.send(product)
})
app.post('/products', async (req, res) => {
    const newPro = new ProductsModel({
        name: req.body.name,
        title: req.body.title,
        price: req.body.price,
        img: req.body.img
    })
    await newPro.save()
    res.send(newPro)
})
app.delete('/products/:id', async (req, res) => {
    const id = req.params.id
    const delPro = await ProductsModel.findByIdAndDelete((id))
    res.send(delPro)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MONGO CONNECTED");
}).catch((err) => {
    console.log("Faild");
})
// PORT=5050
// MONGO_URL=mongodb+srv://asmar:asmar2004@cluster0.2wztxs3.mongodb.net/?retryWrites=true&w=majority