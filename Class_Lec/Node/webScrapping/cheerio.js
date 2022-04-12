const cheerio = require("cheerio");
let html = ` <ul id = "fruits">
    <li class = "apple"> Apple </li>
    <li class = "orange"> Orange </li>
    <li class = "pear"> Pear </li>
</ul> `

// cherio stores data in form of object;
let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr.text());

let fruitName = selecTool(".pear");
console.log(fruitname.text());

//cheerio is node module :  Cheerio parses HTML and it traverses the html so that data can be manipulated according to user's needs

