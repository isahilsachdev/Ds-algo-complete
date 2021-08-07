function runProgram(input) {
    input=input.trim().split("\n")
    let nums=input[1].trim().split(" ").map(Number)

    var count=0
    for(var i=0 ; i<nums.length-1 ; i++) {

        if(nums[i] > nums[i+1]) {
            break

        } else {
            nums[i+1]=nums[i+1]-nums[i]
            nums[i]=0
            count++
        }  
    }

    if(nums[nums.length-1]==0) {
        count++
    } 

    if(count==nums.length) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}
// runProgram(`2
// 2 2`) 
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