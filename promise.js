// promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 3000);
    }
).then((data) => {
    console.log(data);  
    return 'data';
}
).then((data) => {
    console.log(data);
}
).catch((error) => {
    console.log(error);
}  
); 



