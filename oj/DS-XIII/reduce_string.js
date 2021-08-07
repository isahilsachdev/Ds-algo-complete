function runProgram(input) {
    
    var output = []
    
    for(var i=0 ; i<input.length ; i++) {

        if(input[i]==output[output.length-1] ) {
            output.pop()
        } else {
            output.push( input[i] )
        }
    }
    console.log(output.length==0? "Empty String" : output.join(""))
}
runProgram(`aaabccddd`) 

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