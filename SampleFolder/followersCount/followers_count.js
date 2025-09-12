let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
document.getElementById("countDisplay").innerText=count;
}
function checkCountValue(){
    if(count==10){
        alert("Congratulations! You have reached 10 followers.");
    }else if(count==20){
        alert("Amazing! You have reached 20 followers.");
    }
}
function resetCount(){
    count=0;
    alert("Followers count has been reset.");
    displayCount();
}