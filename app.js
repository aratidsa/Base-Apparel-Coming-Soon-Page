/* Declaration */
const correctEmail = document.getElementById('check-email')
const emailInput = document.getElementById('email-work')
const displayMsg = document.getElementById('display-msg')
const showError = document.getElementById('img-error')

/* Event Listener */
correctEmail.addEventListener('click',function(){
    const emailId = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(emailId))
        {
            displayMsg.textContent='Thank you for subscribing to our newsletter' 
            displayMsg.style.color='hsl(168, 85%, 37%)'
            showError.style.display='none'
            console.log('correct')
        }
    else{
        console.log('incorrect')
        displayMsg.innerHTML= 'Please provide a valid email'
        displayMsg.style.color='hsl(0, 93%, 68%)'
        showError.style.display='inline'
    } 
})      
