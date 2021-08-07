function runProgram(input) {
    var input=input.trim().split("\n")
    var input1 = input[0].split(" ").map(Number)
    var row=input1[0]
    var col=input1[1]

    var org=[ ]
    for(var i=1 ; i<=row ; i++ ) {
        input2=input[i].split(" ").map(Number)
        org.push(input2)
    }        
    

    var matrix=[ ]
    for(var i=0 ; i<col ; i++ ) {
        var rows=[ ]
        for(var j=0 ; j<row ; j++) {
            rows.push(org[j][i])
        }    
        matrix.push(rows.join(" "))
    }
    
    // \n bcoz i have to leave line after every row
    console.log(matrix.join("\n"))
    

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