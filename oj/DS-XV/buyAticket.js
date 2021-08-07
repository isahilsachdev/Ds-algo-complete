function runProgram(input) {
    var input=input.trim().split("\n")
    input.shift()
    var arr= []
    
    for(var i=0 ; i<input.length ; i++) {
        var input2=input[i].split(" ")

        if(input2[0]==="E") {
            arr.push(input2[1])
            console.log(arr.length)
             
        }else {
            if(arr.length !== 0) {
                console.log(arr[0],arr.length-1)
                arr.splice(0,1)
            } else {
                console.log(-1 , arr.length)
            }
        }
    }

}     
// runProgram(`5
// E 2
// D
// D
// E 3
// D`)          

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

