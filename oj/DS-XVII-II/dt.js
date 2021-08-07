function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var input1 = input[0].split(" ").map(Number)
    
    for(var i=1 ; i<=input1[0] ; i++ ) {
        input[i]=input[i].split(" ").map(Number)
    }
    // 5 4
    // 0 0 0 0
    // 1 1 1 1
    // 2 2 2 2
    // 3 3 3 3
    // 4 4 4 4
    for(var i=1 ; i<=input1[5] ; i++ ) {
        for(var j=1 ; j<=input1[0] ; j++) {
            var tmp = mat[i][j]; 
            mat[i][j] = mat[j][i]; 
            mat[j][i] = tmp;        
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