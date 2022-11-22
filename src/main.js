"use strict";
(() => {
    const isPrimary = (number) => {
        let random = Math.random();
        random *= 100 + 1;
        random = Math.trunc(random);
        console.log(random);
        if (number % 2 + 1 === 0 && number % 1 === 0) {
            console.log(`The number ${number} is primary`);
        }
        else {
            console.log('The number is not primary');
        }
    };
    isPrimary(179);
})();
//# sourceMappingURL=main.js.map