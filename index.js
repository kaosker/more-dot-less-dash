function moreDotLessDash (str) {
    let dotsCount = 0;
    let dashCount = 0;

    for (let i = 0; i < str.length; i++) {
        let currentWord = str[i];

        if (currentWord === "-") {
            dashCount++;
        } else if (currentWord ===".") {
            dotsCount++;
        }

    }
    if (dotsCount > dashCount) {
        return true;
        } else {return false}
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
