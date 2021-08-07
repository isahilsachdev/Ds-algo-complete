function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var input1 = input[0].split(" ").map(Number)
    var sum=0
    
    for(var i=1 ; i<=input1[0] ; i++ ) {
        input[i]=input[i].split(" ").map(Number)
    }
    for(var i=1 ; i<=input1[0] ; i++ ) {
        for(var j=0 ; j<input1[1] ; j++) {
            if((input[i][j]%3)==0) {
                sum+=input[i][j]
            }
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