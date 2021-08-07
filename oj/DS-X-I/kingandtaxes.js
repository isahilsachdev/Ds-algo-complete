
function runProgram(input) {
    input=input.trim().split("\n")

    var nums=input[1].split(" ").map(Number).sort()
    var sum=0
    console.log(nums)
    for(var i=nums.length/2 ; i<nums.length ; i++) {
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