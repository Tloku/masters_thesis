//This need to be run seperatly using node .\redis-serverr.js command

const express = require("express")
const redis = require("redis")
const cors = require("cors")

const app = express()
const port  = 3500;

const client = redis.createClient({
    password: '12345',
    host: 'localhost',
    port: 6379
})

client.on('error', (err) => console.log("Couldn't connect to redis server", err))

if (!client.isOpen) {
    client.connect();
}

app.use(express.json({limit: '150mb'}));
app.use(express.urlencoded({limit: '150mb'}));
app.use(cors());

app.post('/set', (request, resp) => {
    console.log("Set Request", request.body.key);

    client.set(request.body.key, JSON.stringify(request.body.value), {EX: 60*5})
})

app.get('/get/:key', async (request, resp) => {
    console.log("Get Request", request.params.key);
    const data = await client.get(request.params.key)
    if (data) {
        resp.send(JSON.parse(data));
    } else {
        resp.send(null);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});