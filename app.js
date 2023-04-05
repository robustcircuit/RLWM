// get packages
var fs = require("fs")
var cors = require("cors")
var http = require("http")
var favicon = require("serve-favicon")
var path = require("path")
bodyparser = require('body-parser');
var express = require('express')
var mongoose = require('mongoose')
require('dotenv').config()
const { Server } = require("socket.io")
const { v4: uuidv4 } = require('uuid');

// obtain various objects
var jsonParser = bodyparser.json()




// --- INSTANTIATE THE APP
var app = express();
// manage cors policy
app.use(cors())

app.use(bodyparser.json({ limit: '50mb' }));


// create http server for socket
const serverhttp = http.createServer(app);
const io = new Server(serverhttp, {
  cors: {
    origin: ['https://localhost:3000/', 'https://addyourdomainhere'],
    methods: ["GET", "POST"]
  },
});

// define general static folder

// serve favicon
//app.use(favicon(path.join(__dirname, 'multi/public/www/Main/assets/', 'RCfavicon.png')))
//app.use('jspsychfolder', express.static(__dirname + "/jspsychfolder"));

//////////////////////////////////////////////////////////////////////////
// Database management
// backup through schema for continuous submission to avoid full data-loss
// in case of posting error
//////////////////////////////////////////////////////////////////////////
var backupSchema = new mongoose.Schema({}, {
  strict: false,
  collection: 'backup'
});
var backupModel = mongoose.model('backup', backupSchema);

// schema for participants
var mainSchema = new mongoose.Schema({}, {
  strict: false,
  collection: 'main'
});
var mainModel = mongoose.model('Main', mainSchema);

// manage input data from socket
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('backup', (data) => {
    backupModel.create({
      "backupdata": data
    });
  });
});

// connect to MongoDB
if (process.env.NODE_ENV === 'development') {
  // Define the development db
  mongoose.connect('mongodb://127.0.0.1/RLWMdb');
} else if (process.env.NODE_ENV === 'production') {
  // Define the production db
  mongoose.connect(process.env.MONGODB_URI);
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('database opened');
});

app.get('/RLWM', function (request, response) {
  response.render('RLWM_exp.html');
});

app.post('/RLWMpost', function (request, response) {
  finishModelOTHER.create({
    "RLWMdata": request.body
  });
  console.log('received RLWM data')
  response.end();
})

app.use(express.static(__dirname + '/public/'));

app.set('views', __dirname + '/public');

//
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/getEnvironmentVars', (_, res) => {
  res.json({ ENVIRONMENT: process.env.NODE_ENV })
})

app.get('/getNsubjectsRLWM', (req, res) => {
  var targetModel = mainModel;
  targetModel.find({ "data.trial_tag": "ieLOC" }, function (err, docs) {
    targetModel.find({ $and: [{ "RLWMdata.uniqueId": req.body.uniqueId }, { "RLWMdata.completedTask": 'RLWM' }] }).then(function (docs) {
      res.json({ NsubjectsRLWM: docs.length })
    })
  })
})


// --- START THE SERVER
if (process.env.NODE_ENV === 'development') {

  serverhttp.listen(3000, function () {
    console.log("Listening on port %d", serverhttp.address().port);

  });

} else if (process.env.NODE_ENV === 'production') {
  // Define the production db
  serverhttp.listen(process.env.PORT, function () {
    console.log("Listening on port %d", serverhttp.address().port);
  });

}