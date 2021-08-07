
function runProgram(input) {
    input=input.trim().split("\n")

    var nums=input[1].split(" ").map(Number)
    var nums2=input[1].split(" ").map(Number)

    // 5
    //5 4 6 2 8

    for(var i=0 ; i<nums.length ; i++) {
        var min = i
        for(var j=i+1 ; j<nums.length ; j++) {
            if(nums[j]<nums[min]) {
                min=j
            }
        }
        temp=nums[min]
        nums[min]=nums[i]
        nums[i]=temp
    }
    
    // console.log(nums.join(" "))
    // console.log(nums2)
    var output=''
    for(var i=0 ; i<nums.length ; i++ ) {
        for(var j=0 ; j<nums.length ; j++ ) {
            if ( nums[i]==nums2[j]) {
                output += nums2.indexOf(nums[i])+" "
            }
        }
    }
    console.log(output)
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