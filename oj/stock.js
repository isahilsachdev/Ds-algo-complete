function runProgram(input) {
    var price =[550,240,84,159,80,160,252]
    var input=input.split(/[\r\n]+/)
    var req=input[1].split(' ')
    var sum=0
    for(var i=0 ; i<price.length ; i++) {
        if(req[i]==0) {
            continue
        } else {
            sum=sum+(price[i])
        }
    }
    sum=sum*weeks
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