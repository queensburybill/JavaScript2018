const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const categories = require("./categories.json");

/**
 * You should not hardcode the secret here. It is sensitive data.
 * Usually you would put this in a config file in a safe place
 */
const secret = "TKZl2sLjfk";

let token;

const app = express();
app.use(cors());
app.use(bodyParser.json());

/**
 * JWT verifier
 */
// app.use(expressJwt({ secret }).unless({ path: ["/", "/signin", "/nominees"] }));

/**
 * Content-Type verifier
 */
app.use((req, res, next) => {
  if (
    req.originalUrl === "/" ||
    req.originalUrl === "/nominees" ||
    req.originalUrl === "/complete"
  )
    return next();
  const { headers } = req;
  if (
    !headers["content-type"] ||
    headers["content-type"].toLowerCase().indexOf("application/json") < 0
  ) {
    console.log(headers);
    return res.status(415).send({
      isSuccess: 0,
      retMessage:
        "Could not read request. Requires the 'Content-Type: application/json' header"
    });
  }
  next();
});

/**
 * Logs request
 */
app.use((req, res, next) => {
  console.log(`Received request for ${req.originalUrl}`);
  next();
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    console.log(req.headers);
    res.status(401).send({ isSuccess: 0, retMessage: "Unauthorized" });
  } else {
    console.error(err.stack);
    res.status(400).send({ isSuccess: 0, retMessage: "Bad request" });
  }
  next();
});

/**
 * So you see the loading symbol,
 * I am delaying the response
 * @see https://www.npmjs.com/package/sleep
 */
const msleep = n => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
};

const methodNotAllowed = (req, res) => {
  res.status(405).send({
    isSuccess: 0,
    retMessage: "Method Not Allowed"
  });
};

app.all("/", (req, res) => {
  const text = `<!DOCTYPE html><html><head></head><body><h1>Its running!</h1><table><thead><th>Method</th><th>URL</th><th>Example Request</th><th>Requires Authorization Header*</th></thead><tbody>
    <tr><td>POST</td><td>http://localhost:7001/signin</td><td><code>{"memberId": "asdf", "pinNumber": "1234"}</code></td><td>&dash;</td></tr>
    <tr><td>GET</td><td>http://localhost:7001/nominees</td><td></td><td>&dash;</td></tr>
    <tr><td>POST</td><td>http://localhost:7001/vote</td><td><code>{"categoryId": "1", "nomineeIndex": 0}</code></td><td>&check;</td></tr>
    <tr><td>POST</td><td>http://localhost:7001/complete</td><td></td><td>&check;</td></tr>
    </tbody></table><p><small>* Example authorization header would be<br><code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2RmIiwiaWF0IjoxNTQzMTE1MTY1fQ.c2svAxNJrl2PxjRH-e6o6sBOOHCzTQWQb2bwZipWx8w</code></small></p></body></html>`;
  res.send(text);
});

app.post("/signin", (req, res) => {
  msleep(750);
  const { memberId, pinNumber } = req.body;
  if (memberId === "asdf" && pinNumber === "1234") {
    token = jwt.sign({ sub: memberId }, secret);
    res.send({
      isSuccess: 1,
      retMessage: "Success",
      token
    });
  } else {
    res.send({
      isSuccess: 0,
      retMessage: "Invalid member ID or pin number"
    });
  }
});
app.all("/signin", methodNotAllowed);

app.get("/nominees", (req, res) => {
  msleep(500);
  res.send({
    isSuccess: 1,
    retMessage: "Success",
    categories
  });
});
app.all("/nominees", methodNotAllowed);

app.post("/vote", (req, res) => {
  msleep(100);
  const { body } = req;
  if (isNaN(body.categoryId) || isNaN(body.nomineeIndex))
    return res.status(400).send({
      isSuccess: 0,
      retMessage: "Missing parameters. Need categoryId and nomineeIndex"
    });

  res.send({
    isSuccess: 1,
    retMessage: "Success"
  });
});
app.all("/vote", methodNotAllowed);

app.post("/complete", (req, res) => {
  msleep(500);
  res.send({
    isSuccess: 1,
    retMessage: "Success"
  });
});
app.all("/complete", methodNotAllowed);

const server = app.listen(7001, () => {
  console.log(
    `\nYour server is running on http://localhost:${server.address().port}/`
  );
  console.log(`\nPress ctrl+c to stop\n`);
});
