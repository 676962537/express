var mysql = require('mysql');var dbConfig = require('./DBconfig.js');var pool = mysql.createPool( dbConfig.mysql );module.exports=function(sql,callback){    pool.getConnection(function(err, connection) {        // 建立连接 增加一个用户信息        if(err){            callback(err,null);        }else{            connection.query("set names utf8;");            connection.query(sql, function(err, result) {                if(result) {                    callback(err,result);                }                // 释放连接                connection.release();            });        }    });}