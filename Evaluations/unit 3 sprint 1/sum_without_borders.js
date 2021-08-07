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

        for(var j=line+1 ; j<line+size-1 ; j++ ) {
            matrix.push(input[j].trim().split(" "))
        }
        console.log(matrix)
        //4 5 6 7 9 
        //9 2 9 3 7

        for(var j=0 ; j<matrix.length ; j++  ) {
            for (var k=1 ; k<matrix[i].length-1 ; k++) {
                arr.push(matrix[j][k])
            }   
        }
        
        line+=size
        arr2.push(arr.join(" "))
    }
    console.log(arr2.join("\n"))   
}
runProgram(`2
5
1 2 3 9 0
4 5 6 5 7
7 8 9 2 1 
6 7 8 3 5
7 8 9 2 1
5
2 3 4 5 6 
9 8 7 3 2 
0 9 0 4 5
2 3 4 5 6 
9 8 7 3 2 
`) 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });

// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });