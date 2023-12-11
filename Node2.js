const fs= require ("fs");

//synchronous or blocking (line by line reading)

// let text=fs.readFileSync("shahid.txt", "utf-8")
// console.log(text)

// // replacing 

// let newText= text.replace("shahid" , "shahid khan")
// console.log(newText)

// // creating a new file and getting text from shahid.txt file
// fs.writeFileSync("shahid2.txt", text)


// reading file asynchronously or nonblocking becouse it will not block exection and async contain a callback function
// line by line reading but not guranteed
let asyText= fs.readFile("shahid.txt", "utf-8", (err,data)=>{
    console.log(data)
});
console.log(asyText)
console.log("here is your text");


// 



