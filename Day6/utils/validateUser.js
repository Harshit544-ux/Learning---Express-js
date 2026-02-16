function validateUser(data){

const mandatoryFields = ['name', 'email', 'password'];

const IsAllowed= mandatoryFields.every((k)=> Object.keys(data).includes(k));

    if(!IsAllowed)
        throw new Error("Missing mandatory fields");

    }

    //Email validation 
    if(!validateEmail(data.email)){
        throw new Error("Invalid email format");
    }
    
    //Password validation
    if(!validatePassword(data.password)){
        throw new Error("Password must be at least 6 characters long and contain at least one number");
    }


module.exports =validateUser;




