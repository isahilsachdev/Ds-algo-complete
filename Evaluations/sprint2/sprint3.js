function runProgram(input) {
    var input=input.split(' ').map(Number)
    var sum=[]
    var sum2=0
    for(var i=1 ; i<=input[0]*input[1] ; i++ ) {
        if(i%input[0]==0){
            sum.push(i)
        } 
    }
    for(var j=0;j<sum.length ; j++) {
        if(sum[j]%input[2]==0){
            sum2=sum2+sum[j]
        }
    }
    console.log(sum2)
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