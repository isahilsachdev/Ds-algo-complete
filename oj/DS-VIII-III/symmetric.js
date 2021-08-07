
function runProgram(input) {
    input=input.trim().split("\n")
    var testCases=Number(input[0])
    
    var pos=1
    var arr=[]
    for(var i=0 ; i<testCases ; i++) {
        var size=Number(input[pos])
        pos++
        var matrix=[]

        for(var j=pos ; j<pos+size ; j++ ) {

            matrix.push(input[pos].trim().split(""))

        }
        pos+=size
        console.log(matrix)
    
        var hor=checkHorizontal(matrix)
        var ver=checkVertical(matrix)
 
        if (hor && ver) {
            console.log("BOTH")
        }else if (hor) {
            console.log("HORIZONTAL")
        }else if (ver) {
            console.log("VERTICAL")
        }else {
            console.log("NO")
        }    
    }
    function checkHorizontal(matrix) {
        for(var m=0 ; m<Math.floor(matrix[m].length/2) ; m++ ) {    
            for(var k=0 ; k<matrix.length ; k++ ) {
                if(matrix[m][k]!=matrix[matrix.length-1-m][k]) {
                    return false
                }
            }           
        }  
        return true             
    } 
    function checkVertical(matrix) {
        for(var m=0 ; m<matrix.length ; m++ ) {
            var count=0
            for(var n=0 ; n<=Math.floor(matrix[m].length/2) ; n++) {
                if(matrix[m][n]!=matrix[m][matrix.length-1-n]) {
                   return false
                }
            }
        }
        return true
    }
    
 
}
runProgram(`   3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`)

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });

// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });