import express from 'express'
import fs from 'fs'
const users = fs.readFileSync('./users.json')

const app= express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:'50mb'}))

app.get('/',(req, res)=>{
    try {
        const data = JSON.parse(users)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error:'server error'})
    }
})


app.listen(4000,()=>{
    console.log('running')
})