function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((val) => {
                results[index] = val;
                completed++;
                if(completed === promises.length){
                    resolve(results);
                }
            })
            .catch((err) => reject(err));
        });
        if(promises.length === 0) resolve([]);
    });
}