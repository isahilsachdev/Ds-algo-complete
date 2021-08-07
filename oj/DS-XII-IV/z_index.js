
function runProgram(input) {
    input=input.trim().split("\n")

    var test = Number(input[0])
    var line=1
    var arr=[]
    var arr2=[]
    for(var i=0 ; i<test ; i++) {
        var size=Number(input[line])
        line++
        var matrix = []

        for(var j=line ; j<line+size ; j++) {
            matrix.push(input[j].split(" "))
        }
        for(var j=0 ; j<size ; j++) {
            arr.push(matrix[0][j])
        }
        for(var j=size-1 ; j>=size-1 ; j--){
            for(var k=1 ; k<size ; k++) {
                arr.push(matrix[k][j-k])
            }

        for(var j=1 ; j<size ; j++) {
            arr.push(matrix[size-1][j])
        }
    }
        arr2.push(arr.join(" "))
        // console.log(arr.join(" "))
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