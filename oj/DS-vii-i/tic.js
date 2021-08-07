function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var input1=input[0].split(" ")
    var input2=input[1].split(" ")
    var input3=input[2].split(" ")
    var count=0

    for(var i=0 ; i<input.length ; i++ ) {
        if(input1[0]==input1[1] && input1[1]==input1[2] ) {
            console.log(input1[0])
            break
        } else if(input2[0]==input2[1] && input2[1]==input2[2]  ) {
            console.log(input2[0])
            break
        } else if(input3[0]==input3[1] && input3[1]==input3[2] ) {
            console.log (input3[0])
            break
        } else if (input1[i]==input2[i] && input2[i]==input3[i]){
            console.log(input1[i])
            break
        } else if (input1[0]==input2[1] && input2[1]==input3[2]) {
            console.log(input1[0])
            break
        } else if (input1[2]==input2[1] && input2[1]==input3[0]) {
            console.log(input1[2])
            break
        } else {
            count++
        }
    }
    if (count==3) {
        console.log("Tie")
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