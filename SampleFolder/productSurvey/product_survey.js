const username = document.getElementById('name');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const job = document.getElementById('job');
    const designation = document.getElementById('designation');
    const productType = document.getElementById('productType');
    const feedback = document.getElementById('feedbackText');
    const subnitButton=document.getElementById('submitBtn');
function submitFeedback() {
    if(document.getElementById('name').value=="" || document.getElementById('age').value=="" || document.getElementById('email').value=="" || document.getElementById('job').value=="" || document.getElementById('designation').value=="" || document.getElementById('productType').value=="" || document.getElementById('feedbackText').value==""){
        alert("Please fill all the fields");
        return;}else{
    alert("Thank you " + username.value
         + " for your valuable feedback!" );
    document.getElementById('userName').innerHTML = username.value;
    document.getElementById('userAge').innerHTML = age.value;
    document.getElementById('userEmail').innerHTML = email.value;
    document.getElementById('userJob').innerHTML = job.value;
    document.getElementById('userDesignation').innerHTML = designation.value;
    document.getElementById('userProductChoice').innerHTML = productType.value;
    document.getElementById('userFeedback').innerHTML = feedback.value;
    document.getElementById('userInfo').style.display = 'block';
}}
    subnitButton.onclick=submitFeedback;
    document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });