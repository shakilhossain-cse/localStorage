/* Task 1 
setTimeout(()=>{
    console.log('hello friends ');
}, 3500);
Task 2
const number = prompt('type anything');
const num = parseInt(number);
alert(num + 200);
Task 3
const confirmMsg = confirm('do you want to see your location??');
if (confirmMsg) {
    console.log(location.href);
}
Task 4
What is cookiez 
cookies are text file with data - like a username and password - that are used to identify your computer as you use a computer network . specific cookies known as http cookies are use to identify specific users and improve your web experience
Data stored in a cookie is created by the server upon your connection . this data is labeled with an Id unique to you and your computer.
Task 5
diffrent between localStorage and sessionStorage 
Local Storage

Has no expiration date
Client only
Has no SSL support
Data are not transferred on each HTTP request
5 mb limit (check with the browser)
Session Storage

Data is gone when you close the browser tab
Client only
Has no SSL support
Data are not transferred on each HTTP request
 5-10 mb limit (check with the browser) */


 const input = document.getElementById('input');
 const button = document.getElementById('button');
 const ul = document.getElementById('ul');
 

 button.addEventListener('click',()=>{
    const div = document.createElement('div');
    div.classList.add('row')
    div.innerHTML= `<p>${input.value}</p>
                <div class='icon'>
                <i class="fas fa-times"></i>
                </div> 
    `
    ul.appendChild(div);
    input.value = '';
});










 