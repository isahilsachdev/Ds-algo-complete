function runProgram(input) {
    input = input.trim().split("\n")
    // console.log(input[4])

    for ( var i=2 ; i<input.length ; i+=2) {
        // console.log(i)
        var nums= input[i].trim().split(" ").map(Number)
        var sum=0
        // console.log(nums)
        for(var j=0 ; j< nums.length ; j++) {
            sum+=nums[j]*(j+1)
        } 
        console.log(sum)
    }
}

if (process.env.USERNAME === "ASUS") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1
    3
    2 3 4`);
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