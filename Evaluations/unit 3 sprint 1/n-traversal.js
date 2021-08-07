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

        for (var j=0 ; j<1 ; j++) {
            for(var k=size-1 ; k>=0 ; k-- ) {
                arr.push(matrix[k][0])
            }
        }
        
        for(var j=1 ; j<2 ; j++) {
            for(var k=0 ; k<size-1 ; k++ ) {
                arr.push(matrix[j+k][k+1])
            }
        }

        for (var j=0 ; j<1 ; j++) {
            for(var k=size-2 ; k>=0 ; k-- ) {
                arr.push(matrix[k][size-1])
            }
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