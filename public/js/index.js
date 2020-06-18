urlForm.addEventListener('click',async() =>{
    let longUrl = document.getElementById('longurl').value;
    var shortUrldiv = document.querySelector('#link-list');
    let message = document.querySelector('#msg');
    // console.log(longUrl);
    if(!longUrl){
        message.classList.add("message")
        setTimeout(()=>{
            document.querySelector('.message').remove()
        },2500)
    }else{
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
             // console.log(data)
             shortUrldiv.innerHTML +=`<div class="link">
             <span>Long URL</span>
             <p>${data.longUrl}</p>
             <span>Shorten Link</span>
             <input type="text" value=${data.shortUrl} id=${data.urlCode}/>
             <button id="copyBtn" onclick="copyText(${data.urlCode})" class="btn-click">Copy</button>
            </div>`;
            longUrl = ""
         })
         .catch(err => console.log(err));
    }
});

function copyText(link) {
    /* Get the text field */
    var copyText = document.getElementById(link);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    document.getElementById("copyBtn").innerHTML ="Copied";
    alert("Copied");
  
  }
