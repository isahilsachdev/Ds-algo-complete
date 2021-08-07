function runProgram(input) {
    var input=input.split(' ').map(Number)
    var sum=0
    var total=0
    for(var i=0 ; i<input.length ; i++) {
        sum=sum+input[i]
    }
    for(var i=0 ; i<input.length+1 ; i++ ) {
        var n=input.length+1
        total=n*(n+1)/2
    }
    console.log(total-sum)
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