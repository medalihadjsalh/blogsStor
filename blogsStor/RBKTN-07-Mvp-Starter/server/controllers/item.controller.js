// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
 const blog = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
const selectAll = function (req, res) {
  blog.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const add = function (req, res) {
  console.log('here',req.body);
    blog.create(req.body)
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  const delet =function (req, res) {
    const del=req.params.id
    blog.deleteOne({_id:del})
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  const updat =function (req, res) {
    
    const filter={_id:req.params.id}
    
    blog.findOneAndUpdate(filter,{description:req.body.description})
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
  
// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// const selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { selectAll,add,delet,updat };
