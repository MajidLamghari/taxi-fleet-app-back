var express = require("express");
var cors = require('cors');
var app = express();
var rideRoute = require('./routers/ride.routes');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
app.listen(5000, () => {
 console.log("Server running on port 5000");
});

app.use('/rides', rideRoute)