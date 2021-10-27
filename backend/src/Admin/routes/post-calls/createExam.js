module.exports = async (req, res) => {
  var connection = require("../../../../index.js");
  var _ = require("underscore");

  var subjectId = req.body.subjectId;
  var count = req.body.questionCount;
  var examDate = req.body.examDate;

  //Fetch all questions for the subject
  connection.query(
    "select id from questions where subjectId = ?",
    [subjectId],
    function (err, result) {
      var ids = [];
      result.map((el) => {
        ids.push(el.id);
      });
      //Choose random set from this array
      var questionsToUse = _.sample(ids, count).join(",");

      //Insert into examinationmaster
      connection.query(
        "insert into examinationmaster(subjectid, questionIds, examDate) values(?,?,?)",
        [subjectId, questionsToUse, examDate],
        function (err1, result1) {
          if (err1) {
            res.send({
              status: "Failed!",
              message: "Examination Not Created - " + err1,
            });
          } else {
            res.send({
              status: "Success!",
              message: "Examination Created!",
            });
          }
        }
      );
    }
  );
};
