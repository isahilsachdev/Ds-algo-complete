function runProgram(input) {
    var input1=input.split(' ').map(Number)
    var count=0;
    for(var i=1 ; i<=input1; i=i+2) {
        count=count+i
    }
    console.log(count)
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