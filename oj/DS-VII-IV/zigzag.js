function runProgram(input) {
    var input=input.trim().split("\n")
    var input1=input[0].trim().split(" ")
    var row=input1[0]
    var col=input1[1]

    var matrix =[ ]
    for(var i=1; i<input.length ; i++ ) {
        input2=input[i].trim().split(" ")
        matrix.push(input2)
    }

    console.log(matrix)
        
        // 4 7 1 1 7
        // 8 9 9 6 1
        // 6 4 9 5 1
        // 7 7 4 7 7
        // 8 6 2 5 5

    var newmat=""
    for(var i=0 ; i<row ; i++) {
        if(i%2==0){
            for(var j=col-1 ; j>=0 ; j-- ){
                newmat+=matrix[i][j]+" "
            }   
        } else {
            for(var j=0 ; j<col ; j++ ){
                newmat+=matrix[i][j]+" "
            }
        }
    }
    // newmat.split("").join(" ")
    console.log(newmat)
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