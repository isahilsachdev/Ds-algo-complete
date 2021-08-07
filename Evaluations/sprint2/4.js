function runProgram(input) {
    var input = input.split(/[\r\n]+/) 
    var nums=input[1].split(" ").map(Number)
    var count=0


    for(var i=0 ; i<nums.length ; i++) {
        if(nums[nums.length-1]==2) {
            console.log("-1")
            break
        }else if(nums[i]==2) {
            console.log(nums[i+1])
        } else if(nums[i]!==2) {
            count++
        }
    }
    if(count==nums.length) {
        console.log("-1")
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