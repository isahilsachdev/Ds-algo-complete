function runProgram(input) {
    
    var input2=input.split("").map(Number)
    count=0

    for(var i=0 ; i<input2.length ; i++) {
        if(input2[i]==4 || input2[i]==7) {
            count++
        }
    }
    if(count==input.length) {
        console.log("YES")
    } else if(input%4==0 || input%7==0) {
        console.log("YES")
    } else {
        console.log("NO")
    }

}
//  runProgram(`16`)
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