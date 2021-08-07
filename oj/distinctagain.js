function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var nums=input[1].split(' ')

    for(var i=0; i<nums.length ; i++) {
        for(var j=i+1; j<nums.length ; j++) {
            if(nums[i]==nums[j]){
                nums[j]=''
            }    
        }
    }
    nums=nums.join(' ')
    var nums=nums.split(' ').map(Number)
    var sum=0
    for(var i=0 ; i<nums.length ; i++) {
        sum+=nums[i]
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