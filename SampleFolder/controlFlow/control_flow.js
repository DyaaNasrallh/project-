// control_flow.js  

var userRole="admin";
var accessLevel;
if(userRole==="admin"){
    accessLevel="full access";
}
else if(userRole==="manager"){
accessLevel="limited access";
}
else{
    accessLevel="no access";
}
console.log("Access Level: "+accessLevel);
var isLoggedIn=true;
var usemessage;
if(isLoggedIn){
    if(userRole==="admin"){
        usemessage="Welcome Admin! You have full access.";
    }
    else if(userRole==="manager"){
        usemessage="Welcome Manager! You have limited access.";
    }
    else{
        usemessage="Welcome User! You have no access.";
    }
}
else{
    usemessage="Please log in to continue.";
}
console.log("User Message: ",usemessage);
let userType="guest";
let userCategory;
switch(userType){
    case "admin":
        userCategory="Administrator";
        breack;
    case "manager":
        userCategory="Manager";
        breack;
        case "guest":
            userCategory="Gest User";
            breack;
            default:
                userCategory="Unkown user";
}
console.log("User Category: ",userCategory);