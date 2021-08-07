arr = [0,1,2,3,4]

function MyArray(){
    Object.create(this, 'length', {
        enumerable: false,
        writable: true,
    })
}

Array.prototype.top = function () {
    return this[this.length-1]
}
console.log(arr[arr.top()])


array1 = new MyArray()