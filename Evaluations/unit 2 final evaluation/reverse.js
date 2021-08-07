function runProgram(input) {

    var output=""
    
    for (var i=((input.length-1)/2)-1 ; i>=0 ; i--) {
        
        output+=input[i]
        
    }
    for(var j=input.length-2 ; j>=(input.length-1)/2 ; j--) {
        output+=input[j]
    }
    console.log(output)
}

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