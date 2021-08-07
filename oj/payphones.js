function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var price=input[0].split(' ')
    var quantity=input[1].split(' ')
    var sum=0;
    for(var i=0; i<price.length ; i++) {
        sum=sum+(price[i]*quantity[i])
    }
    if(sum>150000) {
        console.log('Not Possible')
    } else {
        console.log('Possible')
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