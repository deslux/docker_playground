const express = require('express'); 
const redis = require('redis'); 
const process = require('process')

const app = express(); 
const redisClient = redis.createClient({
    host:'redis-server',
    port: 6379
}); 
redisClient.set('visits', 0); 

app.get('/', (req, res) => {
    process.exit(500); 
    redisClient.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits); 
        redisClient.set('visits', parseInt(visits) + 1); 
    })
}); 

app.listen(8081, () => {
    console.log('Listen on port 8081'); 
})