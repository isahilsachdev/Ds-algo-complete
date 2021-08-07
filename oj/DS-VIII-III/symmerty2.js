
function runProgram(input) {
    input=input.trim().split("\n")
    let test = Number(input[0])
    let line=1

    for (var i=0 ; i<test ; i++) {
        let size = Number(input[line])
        line++

        let matrix=[]

        for(let j=line ; j<line+size ; j++) {
            matrix.push(input[j].split(""))
        }
        
        line+=size
        console.log(matrix)
    }

}
runProgram(`    3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`)


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