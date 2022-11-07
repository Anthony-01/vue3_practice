/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //采用动态规划来解决问题，时间复杂度是O(n^2)
    let lenMax = s.length,
        startPos = 0;

    let l = r = startPos;

    let db = [];
    for(let n = 0; n < lenMax; n++) {
        let ary = [];
        for(let j = 0; j < lenMax; j++) {
            ary.push(false);
        }
        db.push(ary);
    }

    for (let n = 0; n < lenMax; n++) {
        db[n][n] = true;
    }


};

export default longestPalindrome;