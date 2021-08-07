function runProgram(input) {
    var input = input.split(/[\r\n]+/);
    var weights=input[1].split(' ');

    for(var i=0 ; i<weights.length ; i++) {
        if(weights[i]>=85) {
            console.log('Beep')
        } else {
            console.log('Enter')
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