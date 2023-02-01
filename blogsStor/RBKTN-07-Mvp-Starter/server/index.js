const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require('cors')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');

const app = express();
const PORT = 3000

app.use (cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/items", itemRoutes)
// app.get('/blogposts', (req, res) => {
//   BlogPost.find({}, (err, blogPosts) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.json(blogPosts);
//     }
//   });
// });


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
