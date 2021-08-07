function runProgram(input) {
    input=input.trim().split("\n")

    var line=1
    var test = Number(input[0])

    var arr2=[]

    for(var i=0 ; i<test ; i++) {
        var size=Number(input[line])
        line++

        var matrix = []
        var arr=[]

        for(var j=line ; j<line+size ; j++ ) {
            matrix.push(input[j].split(" "))
        }

        //first line
        for(var j=0 ; j<matrix.length-1 ; j++) {
            arr.push(matrix[0][j]) 
        }

        // diagonal
        for(var j=matrix.length-1 ; j>=matrix.length-1 ; j--) {
            for(var k=0 ; k<matrix.length ; k++ ) {
                arr.push(matrix[k][j-k] )
            }
        }
        // last line
        for(var j=1 ; j<matrix.length ; j++ ) {
            arr.push(matrix[matrix.length-1][j]) 
        }
        line+=size   

        arr2.push(arr.join(" "))
        
    }
    console.log(arr2.join("\n"))
    
    
}

// runProgram(`2
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// 3
// 2 3 4
// 9 8 7
// 0 9 0`) 

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
