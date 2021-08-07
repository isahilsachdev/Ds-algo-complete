function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var item1=input[0].split(' ')
    var item2=input[1].split(' ')
    var sum=0;
    for(var i=0 ; i<item1.length ; i++) {
        sum=sum+(item1[i]*item2[i])
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