//import the express library and assign it to a variable
import express from "express";

//create an instance of an express application
const app = express();

//set the port the application will run on
const port = process.env.PORT || 3001;

//set up response for the root path of the application
app.get("/", (req, res) => {
  res.send("Draw a cow");
});

//set up the application to listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
