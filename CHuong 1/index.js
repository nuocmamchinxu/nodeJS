
// BAI 1 Tính S(n) = 1 + 2 + 3 + ... + n
let b = 1;
let n = 10
for(i=1; i<=n; i++) {
    b = b + i
}
console.log(b)

// BAI 2 Tính S(n) = 1^2 + 2^2 + ... + n^2
let c = 1
let m = 2
for(i=1; i<3; i++ ) {
    c = c + Math.pow(i,m)

}
console.log(c)


