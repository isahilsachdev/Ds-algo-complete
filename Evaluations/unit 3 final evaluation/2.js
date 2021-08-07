
function runProgram(input) {
    input=input.trim().split("\n")

    for(var i=2 ; i<input.length ; i+=2) {
        var nums=input[i].split(" ").map(Number)
        var arr=[]

        for(var j=0 ; j<nums.length  ; j++) {
            
            if(j==nums.length-1) {
                arr.push("-1")
                break
            }else{
                var flag1=true
                for(var k=j+1 ; k<nums.length ; k++) {
                    if(nums[k]>nums[j]) {
                        flag1=false
                        var flag2=true
                        if(k==nums.length-1) {
                            arr.push("-1")
                        }
                        else {
                            for(var l=k+1 ; l<nums.length ; l++) {
                                if(nums[l]<nums[k]) {
                                    flag2=false
                                    arr.push(nums[l])
                                    break
                                }
                            }
                            if(flag2) {
                                arr.push("-1")
                                
                            } 
                            break   
                        }
                        
                    }
                }
                
                if(flag1) {
                    arr.push(-1)
                }
            }
                
        }
        console.log(arr.join(" "))
    }
}
runProgram(`1
6
5 1 6 2 5 1
6
5 1 2 2 7 8`)


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });

// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });