function runProgram(input) {
    var input=input.trim().split("\n").map(Number)
    var size = input[0]
    input.shift()
    console.log(input)
    var arr=[]

    for(var i=0 ; i<size ; i++) {
        var flag =true
        for ( var j=i+1 ; j<size ; j++) {
            if ( input[j] > input[i])  {
                flag = false
                var flag2 = true
                for(var k=j+1 ; k<size ; k++ ) {

                    if(input[k] < input[j]) {
                        flag2=false
                        arr.push(input[k])
                        break
                    }
                }
                if(flag2) {
                    arr.push("-1")
                }
                break
            }
        }
        if(flag) {
            arr.push("-1")
        }
    }
    console.log(arr.join(" "))
}     
// runProgram(`10
// 1
// 6
// 2
// 10
// 2
// 3
// 2
// 10
// 6
// 4`)          

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

