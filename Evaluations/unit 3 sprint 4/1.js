function runProgram(input) {
    input=input.trim().split("\n")
    var input2= input[1].split(" ").map(Number)
    // console.log(input2)
    var sum=[]

    for(var i=0 ; i<input2.length ; i++) {
        var flag = true
        for(var j=i+1 ; j< input2.length ; j++) {
            

            if(input2[j]<input2[i]) {
                sum.push(input2[j])
                flag=false
                break
            }

        }
        if(flag) {
            sum.push(0)
        }
    }
    var output = sum.reduce((a,i)=> {
        return a+i
    })
    console.log(output)
}

// runProgram(`4
// 1 2 3 4`) 

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