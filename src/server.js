const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 8080;




// middleware
// -------------------------
app.use(cors());  // 1
app.use(express.json());  // 2
app.use("/api", userRoutes);  //3



// routes
app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center">welcome to the API-REST-UERS</h1>')
})


// connection to data base MongoDb
mongoose
  .connect("mongodb://localhost:27017/Mern-Users-Search")
  .then(() => console.log("conected to MongoDb"))
  .catch((err) => console.log(err))



app.listen(port, (req, res) => {
    console.log(`server runing in the port ${port}`);
})




