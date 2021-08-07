function runProgram (input) {
    input=input.split("\n")

    for (var i=1 ; i<input.length-1 ;i=i+2) {

        var nums=input[i].trim().split(" ").map(Number)
        var side=[]
        var result=[]
        var expect=1
       

        for(var j=0 ; j<nums.length ; j++) {

            if(nums[j]==expect) {
                result.push(expect)
                expect++
            }else if(side[side.length-1]==expect) {
                result.push(expect)
                side.pop()
                expect++
                if(side[side.length-1]==expect) {
                    result.push(expect)
                    side.pop()
                    expect++
                }
                side.push(nums[j])
                
                
            } else {
                side.push(nums[j])
            }      
        }
        

        for(var j=side.length-1 ; j>=0 ; j--) {
            result.push(side[j])
        }

        var output=true

        for(var j=0 ; j<result.length ; j++) {
            if(j+1==result[j]) {
                continue
            } else {
                output=false
                console.log('no')
                break
            }
        }
        if(output ) {
            console.log("yes")
        }       
    }
}
// runProgram(`5 
// 5 3 2 1 4
// 6
// 3 2 1 4 5 6
// 0`)

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
