function runProgram(input) {
    input = input.trim().split("\n")
    input2 = input[1].split(" ").map(Number)
    console.log(input2)
    var x=[]
    var y=[]

    for (var i=0 ; i<input2.length ; i++) {
        var flagX = true

        for(var j=i-1 ; j>=0 ; j--) {
            if(input2[j]>input2[i]) {
                x.push(j+1)
                flagX=false
                break
            }
        }
        if (flagX) {
            x.push(-1)
        }
        var flagY = true
        for(var j=i+1 ; j<input2.length ; j++) {
            if(input2[j]>input2[i]) {
                y.push(j+1)
                flagY=false
                break
            }
        }
        if(flagY) {
            y.push(-1)
        }      
    }
    var sum=[]
    for (var i=0 ; i<input2.length ; i++) {
        sum.push(x[i]+y[i])
    }
    console.log(sum.join(" "))
    // console.log(x)
    // console.log(y)
}
// runProgram(`5
// 5 4 1 3 2`) 

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