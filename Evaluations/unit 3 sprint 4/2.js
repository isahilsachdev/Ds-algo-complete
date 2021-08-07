function runProgram(input) {

    input=input.trim().split("\n")
    input.shift()
    // console.log(input2)
    var matrix= []
    var first = matrix.push(input[0].split(" "))
    var sec = matrix.push(input[1].split(" "))
    var count = 0

    for(var i=0 ; i<matrix[0].length ; i++) {
        // console.log("hy",matrix[0],matrix[1])
        var flag = true

        for(var j=0 ; j<matrix[0].length ; j++) {
            if(matrix[0][j] !== matrix[1][j]) {
                flag=false
            }
        }
        if(flag) {
            // console.log(count)
            break
        } else {
            matrix[0].push(matrix[0][matrix[0].length-3])
            matrix[0].splice(0,1)
            count++
            // console.log(matrix[0])
        }
    }
    for(var i=0 ; i<matrix[0].length ; i++) {
        count++
    }
    console.log(count)
}

// runProgram(`3
// 3 2 1
// 1 3 2`) 

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