function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var line1=input[0].trim().split(" ").map(Number)
    var row1=line1[0]
    var col1=line1[1]

    var matrix1=[]
    for (var i=1 ; i<=row1 ; i++) {
        var input2=input[i].trim().split(" ").map(Number)
        matrix1.push(input2)
    }
    var matrix2 =[]
    
    for(var i=row1+2 ; i<input.length ; i++) {
        var input3=input[i].trim().split(" ").map(Number)
        matrix2.push(input3)
    }
    // 3 4
    // 1 2 3 4
    // 0 5 6 1
    // 9 3 0 8
    // 2 2
    // 8 8
    // 8 8
    // console.log(matrix1[1])
    // console.log(matrix1[1][0])
    // console.log(matrix1.length)
    // console.log(matrix1[1].length)

    var sum1=0
    for(var i=0 ; i<row1 ; i++) {
        for(j=0 ; j<col1 ; j++) {
            sum1+=matrix1[i][j]
        }
    }
    var sum2=0
    for(var i=0 ; i<matrix2.length ; i++) {
        for(j=0 ; j<matrix2[i].length ; j++) {
            sum2+=matrix2[i][j]
        }
    }
    if(sum1>sum2) {
        console.log(sum1)
    } else {
        console.log(sum2)
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