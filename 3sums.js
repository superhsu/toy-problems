function sums(arr) {
    let output = [];
    if (arr.length < 3) {
        return output; 
    }
    arr = arr.sort((a,b) => {
        return a-b; 
    });

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > 0) {
            return output; 
        }

        if (i > 0   && arr[i] === arr[i -1]) {
            continue; 
        }
        for (let j = i + 1; k = arr.length - 1; j < k) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                output.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;

                while (j < k && arr[j] === arr[j - 1]) {
                    j++
                }

                while (j < k && arr[k] === nums[k + 1]) {
                    k--; 
                }
            } else if (arr[i] + arr[j] + arr[k] > 0) {
                k--
            } else {
                j++; 
            }
                
            }
        }
        return output;
    }
