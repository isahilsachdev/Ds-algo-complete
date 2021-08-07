
// function runProgram(input) {
//     input=input.trim().split("\n")
//     const test=input[0]
//     input.shift()

//     let matrix=[]
//     for(var i=0 ; i<test ; i++) {
//         matrix.push(input[i].trim().split(" "))       
//    }

//    var stack =[]

//    for(var i=0 ; i<test ; i++)  {
//     //    console.log(stack.top)

//        if(matrix[i][0]=="1") {
//             stack.push(matrix[i][1])
//        } 

//        else if(matrix[i][0]=="2") {
//            if(stack.length<=0) {
//                continue
//            }
//            else {
//                stack.pop()
//            }
//        }
//        else {
//             if(stack.length<=0) {
//                 console.log("Empty!")
//             }
//             else {
//                 console.log(stack[stack.length-1])
//             }
//        }

//    }
//    console.log(matrix)
// }
// runProgram(`6
// 1 15
// 1 20
// 2
// 3
// 2
// 3`)

function runProgram(input) {
    input=input.trim().split("\n")
    let size=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    let newarr=new Array(size).fill(1).map((el,i)=>el=i);
    for(let i=0;i<size-1;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                [newarr[j],newarr[j+1]]=[newarr[j+1],newarr[j]];
            }
        }
    }
    console.log(newarr.join(" "))
}
if (process.env.USERNAME === "ASUS") {
    runProgram(`5
    4 5 3 7 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    })
};