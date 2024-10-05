var checkInclusion = function(s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;

    if (s1Length > s2Length) {
        return false; // If s1 is longer than s2, no permutation can exist
    }

    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);

    for (let i = 0; i < s1Length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    if (arraysEqual(s1Count, s2Count)) {
        return true;
    }

    // Slide the window over s2
    for (let i = s1Length; i < s2Length; i++) {
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i - s1Length) - 'a'.charCodeAt(0)]--;

        if (arraysEqual(s1Count, s2Count)) {
            return true;
        }
    }

    return false;
};

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("hello", "ooolleoooleh")); // Output: true
