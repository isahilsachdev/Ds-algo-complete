function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var input1=input[1].split(" ").map(Number)
    var odd=0
    var even=0
    console.log(input1)
    for(var i=0 ; i<input1.length ; i++) {
        if(input1[i]%2==0 ) {
            even+=input1[i]
        } else {
            odd+=input1[i]
        }
    }
    if(odd>even) {
        console.log("Odd")
    } else {
        console.log("Even")
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