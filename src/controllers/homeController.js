//  Nơi điều hướng dữ liệu
const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
  let results = await getAllUser()
  return res.render('home.ejs', { listUsers: results })
}
const getHoiDanIT = (req, res) => {
  res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // connection.query(
  //   `INSERT INTO 
  // Users(email, name, city) 
  // VALUES(?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     if (err) {
  //       console.error('Error executing query', err);
  //       res.status(500).send('Error creating user');
  //     } else {
  //       console.log(results);
  //       res.send('Created user succeed');
  //     }
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO 
  Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city],
  );

  console.log(">>> check results: ", results)
  res.send('Created user succeed');

}

module.exports = {
  getHomepage, getHoiDanIT, postCreateUser, getCreatePage
}