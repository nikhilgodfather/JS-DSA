var findContentChildren = function(g, s) {
    
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let happy = 0;
    let i = 0; 
    let j = 0; 

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            happy++;
            i++; 
        }
        j++;
    }
    return happy;
};

console.log(findContentChildren([10,9,8,7,10,9,8,7], [10,9,8,7])); 
