function runProgram(input) {
    var input= input.split(/[\r\n]+/); 
    var input1=input[0].split(' ').map(Number)
    var count=0;
    for(var i=input1[0] ; i<=input1[1]; i++) {
        if(i%input1[2]==0) {
            count++
        }
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