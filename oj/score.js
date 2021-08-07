function runProgram(input) {
    var sum=0;
    var input=input.split(' ')
    for (var i=0 ; i<input.length ; i++) {
        if(i<=3) {
            sum=sum+(input[i]*(i+1))
        } else {
            sum=sum+(input[i]*6)
        } 
    } 
    console.log(sum);
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