function runProgram(input) {
    input=input.split("\n")
    var nums = input[1].trim().split(" ").map(Number)
    var output=[]
    
    for (var i=0 ; i<nums.length ; i++  ) {
        if(i==nums.length-1) output.push(nums[i])
        for (var j=i+1 ; j<nums.length ; j++) {
            if(nums[j]>nums[i]) {
                break
            }
            else if (j==nums.length-1) output.push(nums[i])
        }
    }
    console.log(output.join(" "))

}            


if (process.env.USERNAME === "ASUS") {
    runProgram(`6
    16 17 4 3 5 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    })
};