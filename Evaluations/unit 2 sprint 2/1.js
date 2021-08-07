function runProgram(input) {
    var input=input.trim().split("\n")
    var line1=input[0].split(" ").map(Number)
    var row=line1[0]
    var col=line1[1]

    var matrix=[]
    for(var i=1 ; i<=row ; i++) {
        var input2=input[i].split(" ").map(Number)
        matrix.push(input2)
    }


    var arr=""
    for(var i=0 ; i<row ; i++) {
        if(i%2==0) {
            for(var j=col-1 ; j>=0 ; j--) {
                arr+=matrix[i][j]+" "
            }
        } else {
            for(var j=0 ; j<col ; j++) {
                arr+=matrix[i][j]+" "
            }
        }
    }

    console.log(arr)
    // 5 5
    // 4 7 1 1 7
    // 8 9 9 6 1
    // 6 4 9 5 1
    // 7 7 4 7 7
    // 8 6 2 5 5
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