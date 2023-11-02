const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("build")); //build파일 보안 오픈

app.set("port", process.env.PORT || 5000);

// 클라이언트에서 빌드된 파일가져오기
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});
