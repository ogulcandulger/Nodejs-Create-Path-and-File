var fs = require('fs');
var dir = 'C:/Users/ogulc/Desktop/Node_Playground';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question(`Please type your file name and extension: `, (input) => {
    let path = dir + '/' + input;
    fs.appendFile(path, 'Created first file using Node.js', err => {
        if(err) throw err;
        console.log('Saved!');
    });
    console.log('The name of the file is: ' + input);
    readline.close();
})


