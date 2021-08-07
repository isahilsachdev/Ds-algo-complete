function runProgram(input) {
    let [string1 , string2]=input.trim().split(/[\r\n]+/)
    string1 = string1.split("").sort()
    string2 = string2.split("").sort()
    var output = true

    for(var i=0 ; i<string1.length ; i++  ) {
        if( string1[i] != string2[i] ) {
            output=false
            break
        } 
    }
    if (output) {
        console.log("Yes")
    } else {
        console.log("No")
    }
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