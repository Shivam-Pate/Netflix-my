

export const checkvalidate = (email,password) =>{
 const isemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
 const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 if(!isemail)return "Email is not valid"
 if(!ispassword)return "Password is not valid"

 return null

}