function runProgram(input) {
    var input=input.split(/[\r\n]+/);
    var nums=input[1].split(' ').map(Number);
    var odd=0;
    var even=0;
    for(var i=0; i<nums.length ;i++) {
        if(nums[i]%2==0) {
            even=even+nums[i]
        } else {
            odd=odd+nums[i]
        }
    }
    if(odd>even) {
        console.log("Odd") 
    } else {
        console.log("Even")
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