function runProgram(input) {
    var input = input.split(/[\r\n]+/) 
    var nums=input[1].split(" ").map(Number)
    var arr=[]
    

    for(var i=0 ; i<nums.length ; i++) {
        var count=0
        for( var j=0 ; j<nums.length ; j++ ) {
            if(i==j) {
                continue
            } else {
                count=count+nums[j] 
            }
        }

        if (count%7==0) {
            arr.push(nums[i])
        }
    }
    for(var k=1 ; k<arr.length ; k++ ) {
        var smallest=arr[0]
        if(arr[k] < smallest ) {
            smallest=arr[k]
        }
    }  
    console.log(smallest) 
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