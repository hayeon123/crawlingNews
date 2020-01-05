var express = require('express')
var router = express.Router()
var mysql = require('mysql')
// var app = express()
// var path = require('path');
// var cors = require('cors');

// app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// use middleware
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.static(path.join(__dirname, 'public')));

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'ssafy',
    password : 'ssafy',
    database : 'project'
})

connection.connect(function (err) {   
    if (err) {     
      console.error('mysql connection error');     
      console.error(err);     
      throw err;
    } 
  });

// app.listen(8090, function() {
//     console.log("start! express server on port 8090");
// });

// router.get('/', (req, res, next) =>{
//     res.sendFile(path.join(__dirname, 'newsfront/public/index.html'));
//   });

router.get('/foodinfo', function(req, res) {
    console.log('food데이터 가져오기')
    var responseData = {};

    var query = connection.query('select * from food', function(err, rows) {
        if(err) throw err;
        if(rows.length) {
            responseData.resmsg = '조회 성공';
            responseData.resvalue = rows;
        } else {
            responseData.resmsg = '조회 실패';
        }
        res.json(responseData)
    })
})

module.exports = router;