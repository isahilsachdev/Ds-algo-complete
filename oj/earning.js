function runProgram(input) {
    var input=input.split(/[\r\n]+/)
    var nums1=input[2].split(' ').map(Number)
    var nums2=input[4].split(' ').map(Number)
    var formul1=input[1].split(' ').map(Number)
    var formul2=input[3].split(' ').map(Number)
    var cur1=nums1[0]
    var count1=1
    var cur2=nums2[0]
    var count2=1

    for(var i=0 ; i<nums1.length ; i++ ) {
        if (nums1[i]>cur1) {
            cur1=nums1[i]
            count1++
        }
    }
    for(var i=0 ; i<nums2.length ; i++ ) {
        if (nums2[i]>cur2) {
            cur2=nums2[i]
            count2++
        }
    }
    console.log(count1*formul1[1])
    console.log(count2*formul2[1])
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