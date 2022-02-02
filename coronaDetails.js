const request = require("request") ;  // to aquire request function
const cheerio = require("cheerio") ;  // to handle html data quired from request

console.log("Before") ;

request('https://www.worldometers.info/coronavirus/', cb)
function cb( error , response , body){
    if(error){
        console.log(error) ;
    }else{
        handleHTML(body) ;
    }
}
    
function handleHTML(html){
    let selTool = cheerio.load(html) ;
    // sice we will not be able to use the html directly so we load this data in this variable
    // console.log(selTool) ;
    let contentArr = selTool('.maincounter-number span')  ;
    // sel tool search for particular class and then by specific tags 
    for(let i = 0  ; i<contentArr.length  ; i++){
        let data = selTool(contentArr[i]).text() ; // it has text function 
        console.log(data)
    }
}
console.log("Before") ;