function runProgram(input) {
    input=input.toLowerCase().split("")
    
    // console.log(input)
    var count=0
    
    var small="abcdefghijklmnopqrstuvwxyz".split("")
    var arr=[]

    for(var i=0 ; i<input.length ; i++) {
        var count2=0
        if(input[i]==" ") {
            continue
        } for(var j=0 ; j<small.length ; j++ ) {
            if (input[i]!=small[j]) {
                count2++
            }
        }
        // console.log(count2)
        if(count2==small.length) {
            continue
        } 
        else {
            arr.push(input[i])
        }
    }
    // console.log(arr)
    for (var i=0 ; i<arr.length ; i++ ) {

        if (arr[i]==arr[arr.length-1-i]) {
            count++
        }
    }
    if(count==arr.length) {
        console.log("YES")
    } else {
        console.log('NO')
    }
}
// runProgram(`too hot to hoot?`)
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