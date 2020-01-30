const urlForm = document.getElementById('urlForm');
const longUrl = document.getElementById('longUrl').value;
const shortUrldiv = document.getElementById('shortUrl');

urlForm.addEventListener('submit',async () =>{
    fetch('http://localhost:5000/url/shorten',{
        method : "POST",
        headers: {
            "Content-Type":"application/json",
        },
        'body': JSON.stringify(longUrl)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
});