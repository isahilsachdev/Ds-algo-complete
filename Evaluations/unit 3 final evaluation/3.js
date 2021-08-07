
function runProgram(input) {
    input=input.split("\n")


    for(var i=2 ; i<input.length ; i+=2) {
        var nums=input[i].trim().split("").map(Number)
        var count1=0 ,count2=0, count3=0, count4=0, count5=0, count6=0, 
        count7=0, count8=0 ,count9=0,count0=0
        var arr=[]
        for(var j=0 ; j<nums.length ; j++) {
            if(nums[j]==1) {count1++} else if (nums[j]==2)  {count2++} else if (nums[j]==3) {count3++} 
            else if (nums[j]==4) {count4++} else if (nums[j]==5) {count5++} 
            else if (nums[j]==6) {count6++} else if (nums[j]==7) {count7++}
            else if (nums[j]==8) {count8++} else if (nums[j]==9) {count9++} else {
                count0++
            }   
        }
        arr.push(count9,count8,count7,count6,count5,count4,count3,count2,count1,count0)
        console.log(arr.join(" "))
    }
}
// runProgram(`2
// 5
// 21321
// 6
// 235452`)


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