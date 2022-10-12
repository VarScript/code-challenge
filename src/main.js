"use strict";
for (let i = 1; i <= 100; i++) {
    let fizz = i % 3 === 0;
    let buzz = i % 5 === 0;
    if (fizz && buzz)
        console.log(`fizzbuzz\n`);
    else if (fizz)
        console.log(`fizz\n`);
    else if (buzz)
        console.log(`buzz\n`);
    else
        console.log(`${i}\n`);
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log(`fizzbuzz\n`);
    else if (i % 3 === 0)
        console.log(`fizz\n`);
    else if (i % 5 === 0)
        console.log(`buzz\n`);
    else
        console.log(`${i}\n`);
}
//# sourceMappingURL=main.js.map