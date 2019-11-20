const express = require('express')
const 

const server = express()
//
server.use(express.static('./public'))

server.listen(9090)