// push pop and top !
function runProgram(input) {
    input=input.trim().split("\n")
    const test=input[0]
    input.shift()

    let matrix=[]
    for(var i=0 ; i<test ; i++) {
        matrix.push(input[i].trim().split(" "))       
    }

   var stack = []

   for(var i=0 ; i<test ; i++)  {
        if(matrix[i][0]=="1") {
            if(stack.length==0) {
                console.log("No Food")
            }
            else {
                console.log(stack[stack.length-1])
                stack.pop()
            }
        } 

        else  {
            stack.push(matrix[i][1])
        }

   }
}
// runProgram(`6
// 1
// 2 5
// 2 7
// 2 9
// 1
// 1`)

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