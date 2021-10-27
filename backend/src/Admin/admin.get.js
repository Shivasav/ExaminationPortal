exports.get = async (req, res) => {
  var inAction = req.params.action;

  res.contentType("application/json");

  if (inAction === "getCourseDetails") {
    var data = require("./routes/get-calls/getCourseDetails.js");
    data(req, res);
  } else if (inAction === "getSubjects") {
    var data = require("./routes/get-calls/getSubjects.js");
    data(req, res);
  }
};
