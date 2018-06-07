function swap(s1, s2) {
    var save1;
    var save2;
    
    for (var i = 0; i < s1.length; i++) {
      
      if (s1[i] !== s2[i]) {
        
        if (!save1) {
          
          save1 = i;
          
        } else {
          
          save2 = i;
          
        }
      }
    }
    
    if (s1[save1] === s2[save2] && s2[save1] === s1[save2]) {
      return true;
    }
    
    return false;
  }
  
  console.log(swap('hello', 'holle'));