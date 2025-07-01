const findNthTerm = (a1, a2, n) => {
    let nth = a1;
    const d = a2 - a1;
    for (let i = 1; i < n; i++) {
        nth = nth + d;
        console.log(`Term ${i + 1}: ${nth}`); // Optional: shows each term
    }
    return nth;
};

const a1 = 2;
const a2 = 3;
const nValue = 4;

console.log(`The ${nValue}th term is:`, findNthTerm(a1, a2, nValue));
