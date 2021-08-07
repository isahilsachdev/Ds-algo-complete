function runProgram(input) {
    input=input.trim().split('')
    for(var i=0 ; i<input.length ; i++) {
        for(var j=i+1 ; j<input.length ; j++) {
            if(input[i]==input[j]) {
                input[j]=""
            }
        }
    }
    input=input.join('')
    console.log(input)
}    

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});