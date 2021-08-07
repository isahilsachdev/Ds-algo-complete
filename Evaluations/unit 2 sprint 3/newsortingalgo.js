function runProgram(input) {
    input=input.trim().split("\n")
    var input1=input[0].split(" ").map(Number)
    var input2=input[1].split(" ").map(Number)

    var k=input1[1]

    //5 6
    // 12 18 17 65 46
    for(var i=0; i<input2.length ; i++){
        for(var j=0 ; j<input2.length-1-i ; j++) {
            if ( ( input2[j] % k ) > ( input2[j+1] % k) ) {
                var temp=input2[j]
                input2[j]=input2[j+1]
                input2[j+1]=temp
            } else {
                continue
            }
        }
    }
    var str=""
    for(var i=0 ;i<input2.length ;i++) {
        str+=input2[i]+" "
    }
    console.log(str)
    
    // console.log(input2.join(" "))
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