function runProgram(input) {
    var input=input.trim().split("").map(Number)
    var count=0
    for(var i=0 ; i<input.length ; i++ ) {
        if(input[i]==input[input.length-1-i]) {
            count++
        }
    }
    if(count==input.length) {
        console.log("Yes")
    } else {
        console.log("No")
    }
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