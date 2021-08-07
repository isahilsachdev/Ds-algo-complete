function runProgram(input) {
    input=input.trim().split("\n")
    var test = Number(input[0])
    var line = 1
    
    for( var i=0 ; i<test ; i++) {
        var size = Number(input[line])
        line++
        
        var matrix=[]

        for(var j=line ; j<size+line ; j++) {
            matrix.push(input[j].split(""))
        }
        var output=true
        for(var j=0 ; j<matrix.length ; j++) {
            
            for(var k=0 ; k<matrix[j].length-1 ; k++) {
                if(matrix[j][k]==matrix[j][matrix.length-1-k]) {
                    continue
                } else {
                    output=false
                    break
                    
                }
            } 
            for(var k=0 ; k<matrix[j].length; k++) {
                if(matrix[j][k]==matrix[matrix.length-j-1][k]) {
                    continue
                } else {
                    output=false
                    break
                        // 1001
                        // 0000
                        // 0000
                        // 1001
                }
            } 
        }
        if(output) {
            console.log("YES")
        } else {
            console.log("NO")
        }
        
        // console.log(output)

        // console.log(matrix)
        line+=size
    }
}

// runProgram(`5
// 2
// 11
// 11
// 4
// 0101
// 0110
// 0110
// 0101
// 4
// 1001
// 0000
// 0000
// 1001
// 5
// 01110
// 01010
// 10001
// 01010
// 01110
// 5
// 00100
// 01010
// 10001
// 01010
// 01110`)

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