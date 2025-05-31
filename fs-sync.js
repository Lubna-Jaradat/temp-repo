// syncronunclly -- Blocking
const {readFileSync, writeFileSync} = require('fs'); // or require('fs') --- fs.method
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt.',
     `\nHere is the result ${first}, ${second}\n`,
    {flag: 'a'} // add to the file // if no flag it means overwrite on it
);
console.log('dont with this task');
console.log('starting the next one');
