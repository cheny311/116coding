//import the express library and assign it to a variable
import express from "express";

//create an instance of an express application
const app = express();
app.use(express.json());
//set the port the application will run on
const port = process.env.PORT || 3001;

// //set up response for the root path of the application
app.get("/firstName/:firstName/lastName/:lastName", (req, res) => {
  // res.send("Draw a cow");
  console.log(req.params);
  res.json({
    data: `The full name is ${req.params.firstName} ${req.params.lastName}`,
  });
  res.json({
    data: "response hello",
  });
});

app.get("/", (req, res) => {
  console.log("test");
});

//set up the application to listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
