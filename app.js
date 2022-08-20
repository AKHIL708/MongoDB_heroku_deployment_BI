const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// require("./db/conn");
// const studentData = require("./model/Structure");
// app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello from the home page");
});
// app.get("/studentList", async (req, res) => {
//   try {
//     const gettingStudentData = await studentData.find();
//     res.send(gettingStudentData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// });
// app.post("/studentList", async (req, res) => {
//   try {
//     const Data = new studentData({
//       StudentName: req.body.StudentName,
//       CollegeName: req.body.CollegeName,
//       Location: req.body.Location,
//     });
//     Data.save()
//     res.status(200).json({result : "sent Successfully"})
//   } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });
app.listen(port, "127.0.0.1", () => {
  console.log(`port listening at ${port}`);
});

