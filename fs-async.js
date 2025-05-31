// asyncronunclly -- None Blocking
const {readFile, writeFile} = require('fs'); // or require('fs') --- fs.method

onsole.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
             `\nHere is the result ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            });
    })
});
console.log('start new one');
