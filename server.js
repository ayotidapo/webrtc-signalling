var app = require("express")();
var http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());
app.options("*", cors());

app.get("/", function(req, res) {
  res.send("<h2>Broadcast server</h2>");
});
let port = process.env.PORT || 8080;
let server = http.listen(port, function() {
  console.log(`listening on *:${port}`);
});

require("./broadcast.js")(server);

// var app = require("express")();
// var http = require("http").createServer(app);
// const cors = require("cors");
// app.use(cors());
// app.options("*", cors());

// app.get("/", function(req, res) {
//   res.send("<h2>Broadcast server</h2>");
// });
// let port = process.env.PORT || 8080;
// let server = http.listen(port, function() {
//   console.log("listening on *:" + port);
// });

// require("./broadcast.js")(server);
