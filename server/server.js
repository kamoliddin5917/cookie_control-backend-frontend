const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 777;

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.cookies);
  if (req.cookies.token) return res.json(req.cookies);

  res.end("ok");
});

app.get("/set", (req, res) => {
  res
    .cookie("token", "111234 set", {
      sameSite: "strict",
      path: "/",
      httpOnly: true,
    })
    .json({ a: "cookie ok" });
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.cookie("token1", "1111 get", {
    sameSite: "strict",
    path: "/",
    httpOnly: true,
  });
  res.json({ a: "req.cookies" });
});

app.delete("/delete", (req, res) => {
  console.log("delete");
  res.clearCookie("token");
  res.end("token delete");
});

app.listen(port, () => {
  console.log(port);
});
