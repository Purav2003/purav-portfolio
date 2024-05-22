require("dotenv").config()
const express = require('express');
const cors = require('cors');
const os = require('os');
const axios = require('axios');
const connectDB = require("./connectDB")
const User = require("./userModel")

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/user-details', async (req, res) => {
  const userAgent = req.headers['user-agent'];

  const networkInterfaces = os.networkInterfaces();
  let mac = '';
  for (let iface of Object.values(networkInterfaces)) {
    for (let ifaceDetails of iface) {
      if (!ifaceDetails.internal && ifaceDetails.mac) {
        mac = ifaceDetails.mac;
        break;
      }
    }
    if (mac) break;
  }

  let geoLocation = {};
  let ip= ''
  try {
    const response = await axios.get(`https://ipinfo.io?token=42fb802813a08a`);
    geoLocation = response.data;
    ip = response.data.ip;
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching geolocation:', error);
  }

  const user = await User.create({
    mac,userAgent,additionalDetails:geoLocation
  })
  res.json({ user });
});
const port = process.env.PORT || 5000
const mongo_url = process.env.MONGO_URL
const start = async ()=>{
    await connectDB(mongo_url)
    app.listen(port, ()=>{
        console.log(`Server is listening on PORT: ${port}`);
    })
}

start()