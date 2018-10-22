var user=new Object();
var record=new Array();
while(true){
var operation=prompt(`Choose your options:
1.Register
2.Login
3.Exit`)

if(operation=='1'||operation=='2'||operation=='3'){
    switch(operation){
     case '1':
     register();
     break;
     case '2':
     login();
     break;
     case '3':
     alert('Exiting')
     break;
     default:
     alert("Invalid option")
     break;
    }
 }
 else {
    break;
 }



function register(){
  
    var firstName=prompt("Enter your first name :");
    var lastName=prompt("Enter your last name :");
    var mobile=prompt("Enter your Mobile Number")
    var email=prompt("Enter your Email id :");
    var password=prompt("Enter your password :");
    user.name=(firstName+' '+lastName);
    user.dob=dob;
    user.mobile=mobile;
    user.email=email;
    user.password=password;
  
    record.push(user)
    for(i in record)
    alert("Registration success... Login now...")
    console.log("Registration success... Login now...");
    
}

function login(){
       email1=prompt("Enter your user id :");
   
    for(index in record)
    if( record[index].email == email1 ){
         password1=prompt("Enter your password :");
    if(record[index].password==password1){
        console.log("login successfull");
        console.log("welcome..."+user.name);
        
        alert("login successfull")
    }else{
        alert("login failed")
    }
    }else{
        alert("invalid email")
    }
        
}
}
