function runProgram(input) {
    var input= input.split(/[\r\n]+/)
    var element=input[0].split(' ').map(Number)
    var arr=input[1].split(' ').map(Number)
    var count=0
    for(var i=0 ; i<arr.length ; i++) {
        for(var j=i+1 ; j<arr.length ; j++) {
            if ((arr[i]+arr[j])==element[1]) {
                count++
            }
        }
    }
    console.log(count)
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