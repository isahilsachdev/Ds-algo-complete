function runProgram(input) {
    var input=input.trim().split("\n")
    var line=input[0].split(" ").map(Number)
    
    var matrix=[]
    for(var i=1 ; i<=line ; i++) {
        var input2=input[i].split(" ").map(Number)
        matrix.push(input2)
    }

    var sum=0
    for(var i=0 ; i<line ; i++) {
        sum+=matrix[0][i]
    }
    for(var i=0 ; i<1 ; i++) {
        for(var j=1 ; j<line ; j++ ) {
            sum+=matrix[j][i]
        }
    }
    for(var i=line-1 ; i>line-2 ; i--) {
        for(var j=1 ; j<line ; j++ ) {
            sum+=matrix[j][i]
        }
    }
    for(var i=1 ; i<line-1 ; i++) {
        sum+=matrix[line-1][i]
    }
    for(var i=1 ; i<line-1 ; i++) {
        sum+=matrix[i][i]
    }
    for(var i=1 ; i<line-1 ; i++) {
        sum+=matrix[i][line-1-i]
    }
    // 5
    // 1 2 3 4 5
    // 6 7 8 9 1
    // 2 3 4 5 6
    // 7 8 9 1 2
    // 3 4 5 6 7
    var center=matrix[Math.floor(line/2)][Math.floor(line/2)]
    console.log(sum-center)
    // 5
    // 1 2 3 4 5
    // 6 7 8 9 1
    // 2 3 4 5 6
    // 7 8 9 1 2
    // 3 4 5 6 7
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