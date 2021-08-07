function runProgram(input) {
    var input=input.split(' ').map(Number)
    var sum=0
    for(var i=1 ; i<=input[1] ; i++) {
        if(((input[0]*i)%input[2])==0) {
            sum=sum+(input[0]*i)
        }
    }
    console.log(sum)
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