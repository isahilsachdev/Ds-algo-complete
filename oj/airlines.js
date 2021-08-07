function runProgram(input) {
    var input= input.split(/[\r\n]+/)
    var bag=input[1].split(' ')
    var handbag=input[2].split(' ')
    for(var i=0; i<bag.length ; i++) {
        if((bag[i]<=15) && (handbag[i]<=7)) {
            console.log('Boarding')
        } else {
            console.log('Stop')
        }
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