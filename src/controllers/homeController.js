//  Nơi điều hướng dữ liệu
const connection = require('../config/database')

const getHomepage = (req, res) => {
  return res.render('home.ejs')
}
const getHoiDanIT = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  console.log(">>> req.body: ", req.body)

  connection.query(
    `INSERT INTO 
  Users(email, name, city) 
  VALUES(?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      if (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error creating user');
      } else {
        console.log(results);
        res.send('Created user succeed');
      }
    }
  );

}

module.exports = {
  getHomepage, getHoiDanIT, postCreateUser
}