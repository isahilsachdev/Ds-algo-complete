function runProgram(input) {
    var input=input.split(/[\r\n]+/) 
    var nums=input[1].split(' ').map(Number)
    var sum=0;
    for(var i=0 ; i<nums.length ; i=i+2) {
        sum=sum+nums[i]
    }
    console.log(sum)
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