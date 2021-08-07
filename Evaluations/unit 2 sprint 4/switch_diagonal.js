function runProgram(input) {
    
    var input=input.trim().split("\n")
    var test=Number(input[0])
    var line=1
    // console.log(input)

    
    for (var i=0 ; i<test ; i++) { 
        let size = Number(input[line])
        line++

        var matrix=[]


        for(let j=line ; j<line+size ; j++) {
            matrix.push(input[j].trim().split(" "))
        }
        
        line+=size

        var arr=[]

        for(var k=0 ; k<matrix.length ; k++) {
            for(var l=0 ; l<matrix[k].length ; l++) {
                arr.push(matrix[l][k])
            } 
        }
        console.log(arr)
    }

}
runProgram(`    
            2
            3
            1 2 3
            4 5 6
            7 8 9
            4
            2 3 5 6
            4 5 7 9
            8 6 4 9
            1 3 5 6`)
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