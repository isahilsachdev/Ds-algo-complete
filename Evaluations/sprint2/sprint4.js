function runProgram(input) {
    var input=input.split(' ').map(Number)
    var now=0;
    var count=0;
    for(var i=0; i<input ; i++ ){
        if(now==input) {
            break
        }
        if((input-now)>=5) {
            now=now+5
            count++
        } else if((input-now)==4) {
            now=now+4
            count++
        } else if ((input-now)==3) {
            now=now+3
            count++
        } else if ((input-now)==2) {
            now=now+2
            count++
        } else if((input-now)==1) {
            now=now+1
            count++
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