function runProgram(input) {
    var input=input.trim().split("\n")
    var input1=input[1].split(" ")
    
    var high=0
    var output=[]
    for(var i=0 ; i<input1.length ; i++) {
        var count=1
        if(input1[i]%2==1) {
            for(var j=i+1 ; j<input1.length ; j++) {
                if(input1[i]==input1[j]) {
                    count++
                } else {
                    break
                }
            }
    
        } else{
            continue
        }
        if(count>high) {
            high=count
        }
    }
    console.log(high)
 
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