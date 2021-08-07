function runProgram(input) {
    
    var output=''
    for(var i=0 ; i<input.length ; i++) {
        var count=0
        for(var j=0 ; j<input.length ; j++) {
            if(input[j]==input[i]) {
                count++
            }
        }
        if (count==1) {
            output+=input[i]
        }
    }
    if (output.length>0) {
        console.log(output[0])
    } else {
        console.log("Not Found")
    }
    

}
// runProgram(`racecars`)
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