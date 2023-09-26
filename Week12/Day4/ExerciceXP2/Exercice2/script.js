fetch('/:notion')

.then(response => {
    if (response.status == 200) {
        return response.json();
    }
    else{
        throw new Error(response.statusText);
    }
})
.then((data)=>{
    console.log(data)
    document.getElementById('display').textContent= data.data;
})
.catch(error => {
    console.log('Looks like there was a problem: \n', error);
});