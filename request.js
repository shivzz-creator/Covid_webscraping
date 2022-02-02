const request = require('request') ;

console.log("Before");

request('https://www.worldometers.info/coronavirus/',function(error , response , body){
    console.log('error :' + error) ;
    console.log('status :' +  response && response.statusCode) ;
    console.log('body :' + body) ;

}) ;
console.log("After");