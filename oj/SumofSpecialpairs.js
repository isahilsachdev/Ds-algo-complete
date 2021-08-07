function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var nums=input[1].split(' ').map(Number)
    var sum=0

    for(var i=0 ; i<nums.length ; i++ ) {
        for(j=i+1 ; j<nums.length ; j++ ) {
            var number=(j-i)
            var countprime=0
            for (var k = 1; k < number; k++) {

                if (number % k == 0) {
                    countprime++
                }
            }
            if (countprime==1) {
                var add=nums[j]-nums[i] 
                sum=sum+Math.abs(add)
            }
        }
    }
    console.log(sum)
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