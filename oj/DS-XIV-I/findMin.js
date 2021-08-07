
function runProgram(input) {
    input=input.trim().split("\n")
    const test=input[0]
    input.shift()

    let matrix=[]
    for(var i=0 ; i<test ; i++) {
        matrix.push(input[i].trim().split(" "))       
   }

   var stack =[]
   for(var i=0 ; i<test ; i++)  {

       if(matrix[i][0]=="PUSH") {
            stack.push(Number(matrix[i][1]))
       } 

       else if(matrix[i][0]=="POP") {
           if(stack.length==0) {
               console.log("EMPTY")
           }
           else {
               stack.pop()
           }
       }
       
       else if(matrix[i][0]=="MIN") {
        if(stack.length==0) {
            console.log("EMPTY")
        }else {
            var stack2=[]
            stack2.push(stack[0])
            for(var j=1 ; j<stack.length ; j++) {
                
                if(stack[j]<stack2[0]) {
                    stack2.pop()
                    stack2.push(stack[j])
                }
    
            }
            console.log(stack2[0])
           }
        }
   
   }
//    console.log(matrix)
//    console.log(stack)
}
// runProgram(`11
// PUSH 5
// PUSH 7
// PUSH 3
// PUSH 8
// PUSH 10
// MIN
// POP
// POP
// MIN
// POP
// MIN`)


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