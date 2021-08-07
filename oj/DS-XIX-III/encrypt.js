function runProgram(input) {
    var input=input.trim().split(/[\r\n]+/)
    var arr = input[0].split("")
    var key = Number(input[1])
    var caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    var small="abcdefghijklmnopqrstuvwxyz".split("")
    var nums="0123456789".split("")
    var ans=""
    var result=[]
    //All-convoYs-9-be:Alert1.

    for(var i=0 ; i<arr.length ; i++) {
        if(caps.indexOf(arr[i])!=-1) {
            ans=caps[(caps.indexOf(arr[i])+key)%26 ]
            result.push(ans)

        } else if(small.indexOf(arr[i])!=-1) {
            ans=small[(small.indexOf(arr[i])+key)%26 ]
            result.push(ans)

        } else if(nums.indexOf(arr[i])!=-1) {
            ans=nums[(nums.indexOf(arr[i])+key)%10 ]
            result.push(ans)

        } else {
            ans=arr[i]
            result.push(ans)
        }
    }
    console.log(result.join(""))

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