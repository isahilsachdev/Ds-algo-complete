function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var nums = input[1].split(' ').map(Number)
    var small=nums[0]
    var large=nums[0]
    for(var i=1 ; i<nums.length ; i++) {

        if(nums[i]<=small) {
            small=nums[i]
        }if(nums[i]>=large) {
            large=nums[i]
        }
    }
    console.log(small)
    console.log(large)
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