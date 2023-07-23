const baseURL = "https://api.clashofclans.com/v1/clans";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc1OTAyOTQyLWZjNWMtNGI4Mi04YzQ3LWEwYWFiNWMyNzdiNSIsImlhdCI6MTY4OTk5MDg0OCwic3ViIjoiZGV2ZWxvcGVyLzhjYWZiOGE2LTIxNzItNDJhZS0zZmI2LTRiNjRlZDBlMDZkNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNjkuMzYuMTM0Il0sInR5cGUiOiJjbGllbnQifV19.z0IIUeXalzQXYynT8i-EOzBfBH0lcwfz8FkVAvcinKvEW-bPN5AeZdpsYDZ6nKuzn6xy4RwwETvywnRcCrhTvg";
const axios = require("axios");
const express = require("express");
const app = express();

app.get("/clans", (req, res) => {
  const params = req.query;
  res.set("Access-Control-Allow-Origin", "*");
  const headers = { Authorization: `Bearer ${token}` };
  axios.get(baseURL, { params, headers }).then((response) => {
    res.send(response.data.items);
  });
});
app.listen(8080, () => {
  console.log("listening on port 8080");
});
