exports.post = async (req, res) => {
  var inAction = req.params.action;

  res.contentType("application/json");

  if (inAction === "addSubject") {
    var data = require("./routes/post-calls/addSubject.js");
    data(req, res);
  }
};
