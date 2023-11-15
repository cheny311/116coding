//import the express library and assign it to a variable
import express from "express";
import { sentence } from 'txtgen';

//create an instance of an express application
const app = express();
let names = ["Sun", "Sanchi", "Tench"];
let people = {
  0: {
    name: "LaiYi",
    sign: "Cancer",
  },
  1: {
    name: "Sun",
    sign: "Leo",
  },
  2: {
    name: "Sanchi",
    sign: "Libra",
  },
  3: {
    namem: "Tench",
    sign: "Libra",
  },
};
app.use(express.json());
//set the port the application will run on
const port = process.env.PORT || 3001;


app.get('/txtgen', (req, res) => {
  const randomSentence = sentence()

  res.send(randomSentence)
})

// //set up response for the root path of the application
app.get("/firstName/:firstName/", (req, res) => {
  let signs = [];
  Object.keys(people).forEach((key, value) => {
    let n = `:${people[key].name}`;
    if (req.params.firstName == n) {
      console.log(people[key].sign);
      signs.push(people[key].sign);
    }
  });
  res.send(signs);
});
// Object.keys(people).forEach((key, value) => {
//   console.log(people[key].sign);
// });
// res.send("Draw a cow");
// console.log(req.params);
//   res.json({
//     data: `The full name is ${req.params.firstName} ${req.params.lastName}`,
//   });
//   res.json({
//     data: "response hello",
//   });
// });

app.get("/", (req, res) => {
  let matches = [];
  if (req.query.lteer == "S") {
    // console.log("Letter is S")
    name.forEach((name) => {
      if (name.includes("S") || name.includes("s")) {
        console.log(name);
        matches.push(name);
        // res.send(name)
      }
    });
  } else {
    console.log("Letter is not S");
  }
  res.send(matches);
});
//query params
//?name=J
//sorting information

///url params
//name?:J
//

//set up the application to listen on the specified port
app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`);
});
