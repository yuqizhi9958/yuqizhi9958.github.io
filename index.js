//http服务
let http = require('http');

//文件
let fs = require('fs');

//创建服务
let server = http.createServer((request,response)=>{
    //设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');

    //读取文件
    fs.readFile('./index.html','utf-8',function(err,data){
        //回掉函数中 文件才读取完毕
        //文件读取完毕，判断是否读取失败
        if(err){
            console.log(err);
        }else{
            //读取成功响应回去
            response.end(data);
        }
    })
})

//开启监听
server.listen(80,'127.0.0.1',()=>console.log('success'));