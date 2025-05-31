// local dependency - use it only in this particular project
//npm i <packgeName>

// global dependency - use it in any project
//npm install -g <packgeName>
//sudo npm // // //

//packge.json - manifest file (store important info about project/packege)
//how to create packge.json?
//   - manual approach (create package.json in the *root*, create propereties etc)
//   - npm init (step by step, press enter to skip)
//   - npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
