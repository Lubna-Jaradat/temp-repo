// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __feilname - file name
// require -- function to use modules (commonJS)
// moudule -- info about current module (file)
// process -- info about env where the program is being executed

/*console.log(__dirname);
setInterval(() =>{
    console.log('hello world!');
    
}, 1000)*/ // logs 'hello world!' to the console every 1 second. try it!

// Moules - Encapsulated code
// split your code into modules
// CommonJs - every file is module (by default)

const names = require('./names'); 
const sayHi = require('./utils');
const data = require('./how-to-export');
require('./mind-grade')
//console.log(data);
//console.log(names);

//use poperety names:
//sayHi(names.fadi);
//sayHi(names.shadi);

//or destructure the object:
const {fadi, lubna, shadi} =  require('./names'); 
//sayHi(fadi);
//sayHi(lubna);
