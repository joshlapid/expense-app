const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'josh',
            age: 29
        });
        // reject('something went wrong');
    }, 3500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
        }, 3500);
    });;
}).then((str) => {
    console.log('does this run?', str);
}).catch((err) => {
    console.log('error', err);
});

console.log('after');