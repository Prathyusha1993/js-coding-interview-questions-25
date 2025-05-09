function fibonacciSeries(n) {
    if (n <= 1) return n;
    return fibonacciSeries(n-1) + fibonacciSeries(n-2);
}

console.log(fibonacciSeries(6));


function fibonacci1(n) {
    const series = [0,1];
    for(let i=2; i<n; i++){
        series.push(series[i-1] + series[i-2]);
    }
    return series.slice(0, n);
}

console.log(fibonacci1(5));
console.log(fibonacci1(6));