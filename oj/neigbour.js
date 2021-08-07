function runProgram(input) {
    var input=input.split(/[\r\n]+/) 
    var nums=input[1].split(' ').map(Number)
    var count=0;
    for(var i=0; i<nums.length ; i++ ){
        if(i==0) {
            if(nums[i]>nums[i+1]) {
                count++
            }
        } else if(i==nums.length-1) {
            if(nums[i]>nums[i-1]) {
                count++
            }    
        }else {
            if((nums[i]>nums[i-1]) && (nums[i]>nums[i+1])){
                count++
            }    
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