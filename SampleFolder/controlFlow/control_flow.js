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
        break;
    case "manager":
        userCategory="Manager";
        break;
        case "guest":
            userCategory="Gest User";
        break;
            default:
                userCategory="Unkown user";
}
console.log("User Category: ",userCategory);
let isAuthenticated=true;
let authenticatedStatus=isAuthenticated?"Authenticated":"Not Authenticated";
console.log("Authentication: ",authenticatedStatus);
let role="employee";
 let authorizationMessage;
switch(role){
    case "employee":
    authorizationMessage="authorized access to Dietary Services";
    break;
    case "enrolled member":
        authorizationMessage="authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
        case "subscriber":
            authorizationMessage="authorized to have partial access to facilitate Dietary Services only.";
            break;
            default:
                authorizationMessage="not authorized to access Dietary Services.";

}
console.log("Dietary Service: ",authorizationMessage);