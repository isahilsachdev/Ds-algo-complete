function runProgram(input) {
    var input1=input.split(/[\r\n]+/)
    var nums=input1[1].split(' ')
    var count=0;
    for(var i=0 ; i<nums.length ; i++) {
        if(nums[i]==42) {
            count++
        }                       
    }
    if(count==0) {
        console.log('No')
    } else {
        console.log('Yes')
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