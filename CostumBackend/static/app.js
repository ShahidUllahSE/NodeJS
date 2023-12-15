const express = require("express")

const app =express();

const port=80;

// for serving static files
 
app.use("/static", express.static('static'))


app.listen(port, ()=>{
    console.log(`listening on port ${port} `)
})