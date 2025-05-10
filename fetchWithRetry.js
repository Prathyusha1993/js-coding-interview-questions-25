async function fetchWithRetry(url, retries=3, delay=1000) {
    for(let i=0; i<=retries; i++){
        try{
            const response = await fetch(url);
            if(!response.ok) throw new Error('Fetch failed.');
            return await response.json();
        } catch(err) {
            if(i === retries) throw err;
            await new Promise(res => setTimeout(res,delay));
        }
    }
}

// usage
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1', 3)
.then((data) => console.log(data))
.catch((err) => console.error('Error:', err))