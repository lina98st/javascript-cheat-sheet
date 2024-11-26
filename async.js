// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data loaded'), 1000);
    });
};
fetchData().then(data => console.log(data)); // "Data loaded"

// async/await
const loadData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};
loadData();
