const mysql=require('mysql');
var mysqlConnection=mysql.createConnection(
   {
    hostname:"localhost",
    user    :"root",
    password:"",
    database:"",
    multipleStatements:true
   } 
);

mysqlConnection.connect(function(err){
    if(!err)
    {
        console.log("connected");
    }
    else{
        console.log("connection failed: "+err);
    }
});

module.exports=mysqlConnection;