// here we will scrape a commentry line from cricinfo



const request = require("request") ;  // to aquire request function
const cheerio = require("cheerio") ;  // to handle html data quired from request

console.log("Before") ;

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', cb)
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
    let contentArr = selTool('.d-flex.match-comment-padder.align-items-center')  ;
    // sel tool search for particular class and then by specific tags 
    // for(let i = 0  ; i<contentArr.length  ; i++){
    //     let data = selTool(contentArr[i]).text() ; // it has text function 
    //     console.log(data)
    // }
    let data =selTool(contentArr[0]).text()
console.log(data);
}

console.log("Before") ;