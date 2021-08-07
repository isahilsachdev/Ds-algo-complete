function runProgram(input) {
    var input1=input.split(/[\r\n]+/) 
    var nums=input1[1].split(' ').map(Number)
    var sum=0;
    console.log(nums)
    console.log(nums[0])
    for(var i=0; i<nums.length ;i++) {   
        sum=sum+nums[i]
    }
    console.log(sum)
    if(sum>100) {
        console.log('Greater')
    } else {
        console.log('Lesser')
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