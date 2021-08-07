function runProgram(input) {
    var input=input.split(/[\r\n]+/) 
    var nz=input[0].split(' ')
    var eng=input[1].split(' ')
    var n1=nz[0] ; n2=nz[1] ; n3=nz[2] 
    var e1=eng[0] ; e2=eng[1] ;e3=eng[2] 
    if(n1>e1) {
        console.log('New Zealand')
    } else if (e1>n1) {
        console.log('England')
    } else {
        if(n2>e2) {
            console.log('New Zealand')
        } else if (e2>n2) {
            console.log('England')
        } else {
            if(n3>e3) {
                console.log('New Zealand')
            } else if (e3>n3) {
                console.log('England')
            }
        }
    }
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