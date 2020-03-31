// import { response } from "express";

const urlForm = document.getElementById('urlForm');
const longUrl = document.getElementById('longUrl').value;
console(longUrl)
const shortUrldiv = document.getElementById('shortUrl');

urlForm.addEventListener('submit',async (e) =>{
    e.preventDefault();
   await fetch('http://localhost:5000/api/url/shorten',{
        method : "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(longUrl)
    }).then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(err => console.error(err));
    // await axios.post('http://localhost:5000/api/url/shorten',
    // {
    //     body: JSON.stringify({longUrl})
    // }).then(response => console.log(response.json()))
    // .catch(err => console.error(err));
});