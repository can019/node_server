var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/* GET users listing. */
router.post('/', function(req, res, next) {
    //console.log(req);
    console.log("a");
    console.log("?");
    res.set('authorization', 'received');
    console.log("?");
    res.json({add:'df'});
    console.log("보냄");
});

module.exports = router;
