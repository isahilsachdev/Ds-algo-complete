function runProgram(input) {
    var input=input.split("\n")

    for(var i=2 ; i<input.length ; i=i+2 ) {
        var count = 0 
        const nums = input[i].trim().split(" ").map(Number)
        // console.log(nums)
        for(var j=0 ; j<nums.length ; j++ ) {
            for(var k=j+1 ; k< nums.length ; k++) {
                if ( 2*nums[j] === 3*nums[k] || 3*nums[j] === 2*nums[k]  ) {
                    count++
                    // console.log(count)
                }
            }
        }
        
    console.log(count)
    }
}

if (process.env.USERNAME === "ASUS") {
    runProgram (`2
    6
    4 4 4 6 6 6  
    4
    0 0 0 0
    `);
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