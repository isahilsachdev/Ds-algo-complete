function runProgram(input) {
    input=input.trim().split("\n")

    for(var i=1 ; i<input.length ; i++) {
        
        for(var j=1 ; j<input[i].length ; j++) {
    
            if(input[i][j]=="1") {
     
                if(j>5) {
                    console.log( "Area"+" "+i+":"+" "+"0")
                } else {
                    console.log( "Area"+" "+i+":"+" "+"2")
                }
            } if (input[i][input[i].length-1]=="0") {
                console.log("Area"+" "+i+":"+" "+"0")
            }
        }

    }
}
runProgram(`4
10
11
100001
1000001`)

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