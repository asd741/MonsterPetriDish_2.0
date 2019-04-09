const express = require('express');
const app = express();

const port = 9000;
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.get('/', (req, res) => {
    return res.json({ code: 0, msg: "test success" });
})

app.listen(port, function () {
   console.log(`server start on http://localhost:${port}, port`)
})