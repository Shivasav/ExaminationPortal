module.exports = async (req, res) => {
  var connection = require("../../../../index.js");
  connection.query(
    "select name, semester_count from coursemaster",
    function (err, result) {
      //res.send(result);

      var resultToSend = [];

      result.map((el) => {
        resultToSend.push({ name: el.name, semesterCount: el.semester_count });
      });

      res.send(resultToSend);
    }
  );
};
