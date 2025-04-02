const prom = new Promise((res, rej) => {
    const ran = 8; // Fixed number

    if (ran < 5) {  // Fixed condition
        res(`Number is less than 5: ${ran}`);
    } else {
        rej(`Error: Number is greater than or equal to 5: ${ran}`);
    }
});

prom
    .then(res => console.log(res))
    .catch(err => console.log(err));
