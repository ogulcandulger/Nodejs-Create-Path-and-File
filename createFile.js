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
    readline.question(`Please type your message: `, (input2) => {
    let path = dir + '/' + input;
    fs.appendFile(path, input2, err => {
        if(err) throw err;
        console.log('Saved!');
    });
    console.log('The name of the file is: ' + input);
    readline.close();
    });
});


