let numJewelsInStones = function(J, S) { 
    let count = 0;
    let jSplit = J.split('');
    let sSplit = S.split('');
    let storage = {};


    for (let i = 0; i < sSplit.length; i++) { 
        if (storage[sSplit[i]]) {
            storage[sSplit[i]]++;
        } else {
            storage[sSplit[i]] = 1; 
        }
    }

    for (let i = 0; i < jSplit.length; i++) {
        for (key in storage) {
            if (jSplit[i] === key) {
                count += storage[key];
            }
        }
    }

    return count;
}


console.log(numJewelsInStones('aA', 'aAAbbbb'));
