function runProgram(input) {
    
    var sum=0
    for(var i=1 ; i<=Number(input) ; i++) {
        var count=0
        for(var j=1 ; j<i ; j++) {
            
            
            if(i%j==0) {
                count++
            }

        }
        if(count==1) {
            sum+=i
        }        
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