
function runProgram(input) {
    input=input.split("\n")
    var string = input[1].trim().split("") 

    for(var i=2 ; i<input.length ;i++ ) {
        nums=input[i].split(" ").map(Number)
        var result=[]
        
        for(var j=0 ; j<nums[0] ; j++) {
            result.push(string[j])
        }
        for(var j = nums[1] ; j>=nums[0] ; j--) {
            result.push(string[j])
        }
        for(var j=nums[1]+1 ; j<string.length ; j++) {
            result.push(string[j])
        }
        string=result
    }
    console.log(result.join(""))
}



// runProgram(` 3 2
// abc
// 0 1
// 1 2`)


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