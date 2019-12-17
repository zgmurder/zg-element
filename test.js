var fs = require('fs');

let components = []
const files = fs.readdirSync('./')
files.forEach(function (item, index) {
    let stat = fs.lstatSync("./" + item)
    if (stat.isDirectory() === true) { 
      components.push(item)
    }
})

console.log(components);

let str = JSON.stringify(components)
 
 fs.writeFile('./extension.json',str,function(err){
 if (err) {res.status(500).send('Server is error...')}
})