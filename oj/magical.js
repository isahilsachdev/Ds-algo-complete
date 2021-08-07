function runProgram(input) {
    var input1=input.trim().split("").map(Number)
    var count1=0
    for(var i=0 ; i<input1.length ; i++ ) {
        if(input1[i]==4 || input1[i]==7) {
            count1++    
        } else if(input%4==0 || input%7==0) {
            console.log("YES")
            break
        } else {
            console.log("NO")
            break
        }
    }
    if(count1==input1.length) {
        console.log("YES")
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