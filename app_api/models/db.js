var mongoose=require("mongoose");
require("./mekansema");
//var dbURI="mongodb://127.0.0.1/mekanbul";
var dbURI="mongodb+srv://Eymen:1234@mekanbul.7dh9elh.mongodb.net/mekanbul?retryWrites=true&w=majority";

mongoose.connect(dbURI);

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
})


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlandı.");
})


mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu.");
})


mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası.");
})


require("./mekansema")