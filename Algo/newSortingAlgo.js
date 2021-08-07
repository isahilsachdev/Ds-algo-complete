
function runProgram(input) {
    input=input.trim().split("\n")
    var test=input[0].trim().split(" ").map(Number) 
    var nums=input[1].trim().split(" ").map(Number)
    
    
     
    for(var i=0 ; i<nums.length ; i++) {
        for(var j=0 ; j<nums.length-1-i ; j++) {
            if(nums[j]%test[1]>nums[j+1]%test[1]) {
                var temp=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
            }
        }
    }
    console.log(nums.join(" "))
}

// runProgram (`5 6
// 12 18 17 65 46`)
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