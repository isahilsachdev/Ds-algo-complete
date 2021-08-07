function runProgram(input) {
    input=input.trim().split("\n")

    let nums=input[1].trim().split(" ").map(Number)

    var count=0
    var output=[]

    for(var i=0 ; i<nums.length ; i++) {

        if(i==0) {
            output.push(-1)
        } else {
            for(var j=i-1 ; j>=0 ; j--) {
                if(nums[j]<nums[i] ) {
                    output.push(nums[j])
                    break
                } else if( ( nums[j] >= nums[i]) && j==0) {
                    output.push(-1)
                    break
                }
            }
        }
    }
    console.log(output.join(" "))

}

if (process.env.USERNAME === "ASUS") {
    runProgram(`5
    4 5 3 7 1`);
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