function runProgram(input) {
    var count=1
    var result=""

    for (var i=0 ; i<input.length-1 ; i++) {
        if(input[i]==input[i+1]) {
            count++
        } else {
            
            result=result+input[i]+count
            count=1
        }
    }
    console.log(result)
    
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