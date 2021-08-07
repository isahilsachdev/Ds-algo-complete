function runProgram(input) {
    var input1= input.split(/[\r\n]+/); 
    var count=0;
    var nums=input1[1].split(' ');
    for(var i=0 ; i<nums.length ; i++) {
        if(nums[i]<0) {
            count++
        }
    }
    console.log(count)
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