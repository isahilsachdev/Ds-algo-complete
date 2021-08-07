function runProgram(input) {
    var input=input.trim().split("\n")
    var row=input[0].trim().split(" ")

    var matrix =[ ]
    for(var i=1; i<input.length ; i++ ) {
        var input2=input[i].trim().split(" ")
        matrix.push(input2)
    }
    var newmat=[]
    
    for(var i=row-1 ; i>=0; i-- ) {
        var rows=[ ]
        for(var j=0 ; j<row ; j++) {
            rows.push(matrix[j][i])
        }
        newmat.push(rows.join(" "))
    }

    console.log(newmat.join("\n"))
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