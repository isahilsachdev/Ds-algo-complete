function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var nums1=input[1].split(' ').map(Number)
    var nums2=input[2].split(' ').map(Number)
    var common=''
    for(var i=0 ; i<nums1.length ; i++ ) {
        for(j=0 ; j<nums2.length ; j++ ) { 
            if(nums1[i]==nums2[j]) {
                common=nums2[j]
            }
        }
    }
    console.log(common)
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