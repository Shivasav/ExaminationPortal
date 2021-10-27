// 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

module.exports = async (req, res) => {
  var connection = require("../../../../index.js");
  var _ = require("underscore");

  var subjectId = req.body.subjectId;
  var count = req.body.questionCount;
  var examDate = req.body.examDate;

  //   connection.query(
  //     "insert into examinationmaster(subjectid, questionIds, examDate) values(?,?,?)",
  //     [subjectId, questionsToUse, examDate],
  //     function (err1, result1) {
  //       if (err1) {
  //         res.send({
  //           status: "Failed!",
  //           message: "Examination Not Created - " + err1,
  //         });
  //       } else {
  //         res.send({
  //           status: "Success!",
  //           message: "Examination Created!",
  //         });
  //       }
  //     }
  //   );
  sendMail();
  res.send("Mail Sent");
};

function sendMail() {
  const SibApiV3Sdk = require("sib-api-v3-sdk");
  let defaultClient = SibApiV3Sdk.ApiClient.instance;

  let apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "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";

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "Subject";
  sendSmtpEmail.htmlContent =
    "<html><body><h1>You are scheduled for an exam.</h1><h3>Click on the below link to begin your exam</h3></body></html>";
  sendSmtpEmail.sender = { name: "Examine", email: "info.examine@gmail.com" };
  sendSmtpEmail.to = [
    { email: "shivasavbhasin@gmail.com", name: "Shivasav Bhasin" },
  ];
  sendSmtpEmail.cc = [{ email: "piyushbhsn@gmail.com", name: "Piyush Bhasin" }];
  sendSmtpEmail.replyTo = {
    email: "shivasavbhasin@gmail.com",
    name: "Shivasav Bhasin",
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
}
