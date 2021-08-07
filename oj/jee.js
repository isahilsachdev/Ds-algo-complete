
function runProgram(input ) {
    var input = input.split(/[\r\n]+/);
    var m1 = input[0].split(' ');
    var m2 = input[1].split(' ');
    var sum1=Number(m1[0])+Number(m1[1])+Number(m1[2])
    var sum2=Number(m2[0])+Number(m2[1])+Number(m2[2])
    var p1=Number(m1[0]) ; c1=Number(m1[1]) ; mt1=Number(m1[2]) ; p2=Number(m2[0]) ; c2=Number(m2[1]) ; mt2=Number(m2[2])
    if(sum1>sum2) {
        console.log('First')
    } else if(sum2>sum1) {
        console.log('Second') 
    } else {
        if (mt1>mt2) {
            console.log('First')
        } else if(mt1<mt2) {
            console.log('Second')
        } else {
            if (p1>p2) {
                console.log('First')
            } else if(p1<p2) {
                console.log('Second')
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


