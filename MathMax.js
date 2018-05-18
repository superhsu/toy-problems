function max(arr) {
    if (arr.length === 0) {
        return 'nothing';
    } else {
        let large = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > large) {
                large = arr[i];
            }
        }
        return large;
    }
}

let arr = [1,2,3];

console.log(max(arr));

//tc: o(N)
//tc: o(1)