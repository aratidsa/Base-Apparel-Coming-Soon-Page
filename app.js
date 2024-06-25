/* Declaration */
const correctEmail = document.getElementById('check-email')
const emailInput = document.getElementById('email-work')
const displayMsg = document.getElementById('display-msg')
const showError = document.getElementById('img-error')

/* Event Listener */
correctEmail.addEventListener('click',function(){
    const emailId = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailId.trim() === "") {
        displayMsg.textContent = 'Email Id required';
        displayMsg.style.color = 'hsl(0, 93%, 68%)';
        showError.style.display = 'inline';        
    } else if (emailPattern.test(emailId)) {
        displayMsg.textContent = 'Thank you for subscribing to our newsletter';
        displayMsg.style.color = 'hsl(168, 85%, 37%)';
        showError.style.display = 'none';      
    } else {
        displayMsg.textContent = 'Please provide a valid email';
        displayMsg.style.color = 'hsl(0, 93%, 68%)';
        showError.style.display = 'inline';
    }   

})      
