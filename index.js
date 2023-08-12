const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const callApi = await axios.put('https://api.chatengine.io/users/', {
            username: username, secret: username, first_name: username
        }, { headers: { 'PRIVATE-KEY': "a0627f75-ab64-4b1b-a74c-af8ad40ce6eb" } })
        return res.status(callApi.status).json(callApi.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);