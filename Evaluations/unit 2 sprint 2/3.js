function runProgram(input) {
    var input=input.split(" ").map(Number)
    var row=input[0]
    var col=input[1]
    console.log(row)
    var matrix=""
    for(var i=0 ; i<row ; i++) {
        if(i%2==0) {
            for(var j=0 ; j<col ; j++) {
                matrix+="#"
            }
        }else {
            for(var j=0 ; j<col ; j++) {
                matrix+="."
            }
        }
    }
    for(var i=1 ; i<row ; i=i+3) {
        matrix[i][col-1]="#"
    }
    for(var i=3 ; i<row ; i=i+3) {
        matrix[i][0]="#"
    }        
    console.log(matrix)
}    

// #########
// ........#
// #########
// #........
// #########
// ........#
// #########
// #........
// #########


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