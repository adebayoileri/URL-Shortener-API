urlForm.addEventListener('click',async() =>{
    const longUrl = document.getElementById('longurl').value;
    var shortUrldiv = document.querySelector('#shortUrl');
    // console.log(longUrl);

   await fetch('https://urlcuttr.herokuapp.com/api/url/shorten',{
        method : "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({longUrl:longUrl})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        shortUrldiv.innerHTML +=`<a href="${data.shortUrl}">${data.shortUrl}</a>`})
    .catch(err => console.log(err));
});