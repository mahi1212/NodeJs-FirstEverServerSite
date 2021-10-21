const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('It is demo test. It should work in Sha Allah.Abr oibo ni?Deki dono')
})

const users = [
    {id: 0, name : 'Bobita', email : 'Bobita@gmail.com', phone : '017148563267'},
    {id: 1, name : 'Shabana', email : 'Shabanashabu@gmail.com', phone : '01721232323'},
    {id: 2, name : 'Shabnoor', email : 'Shabnooor@gmail.com', phone : '01721235623'},
    {id: 3, name : 'Susmita', email : 'susmita@gmail.com', phone : '01721232322'}
]

// POST
app.post('/users', (req,res)=>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('Hitting the post', req.body)
    res.json(newUser)
})

// query search
app.get('/users', (req, res) => {
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
})

// Dynamic API
app.get('/users/:id', (req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['Mango', 'Banana', 'Jackfruit', 'Cheri'])
})
app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('This mango is too sour')
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})
