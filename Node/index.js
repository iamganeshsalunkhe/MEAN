// import the file system module


const fs = require('fs')

// Reading the File Synchronously(Blocking API)
function readSynchornous(){
try{
    const data = fs.readFileSync('./text1.txt')
    console.log(`data: ${data}`);


} catch(error){
    console.log(error);
}
}
readSynchornous()


// Reading the File Asynchronously(Non-Blocking API)

function readAsynchornous(){
    console.log(`Fetching Started`);
    fs.readFile('./text1.txt',function(error, data){
        console.log(`Reading Finshied`);
        
        if (error){
            console.log(`There is Error:${error}`);
        }else {
            console.log(`data:${data}`);
        }
    
        console.log(`Fetching Ended.`);
    })
}
readAsynchornous()

