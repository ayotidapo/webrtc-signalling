var app = require("express")();
var http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());
app.options("*", cors());

app.get("/", function(req, res) {
  res.send("<h2>Broadcast server</h2>");
});

let server = http.listen(3000, function() {
  console.log("listening on *:3000");
});

require("./broadcast.js")(server);
