var express = require("express");
var cors = require('cors');
var app = express();

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
app.listen(5000, () => {
 console.log("Server running on port 5000");
});

app.get("/rides", (req, res, next) => {
    res.json([
        {
            "id": 1,
            "distance": 2,
            "startTime": "2020-06-19T13:01:17.031Z",
            "duration": 9000
        },
        {
            "id": 2,
            "distance": 1,
            "startTime": "2020-06-19T12:01:17.031Z",
            "duration": 6000
            },
            {
            "id": 3,
            "distance": 5,
            "startTime": "2020-06-19T14:01:17.031Z",
            "duration": 7000
            },
            {
            "id": 4, "distance": 5,
            "startTime": "2020-06-19T14:11:17.031Z",
            "duration": 4000
            }   
]);
   });