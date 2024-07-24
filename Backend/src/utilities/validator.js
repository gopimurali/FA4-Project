let Validator = {};

Validator.validatemailId = function ( emailId ) {
    // let pattern = new RegExp( "^[A-Za-z0-9]+@[A-za-z0-9]+/.[a-z]{2,3}$" );
    // if( !pattern.test( emailId ) ) 
    if( !emailId.match( /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/ ) ){
        let err = new Error( "Error in email Id" );
        err.status = 406
        throw err;
    } else{
        return emailId;
    }
}

// structural test is written only for validateBookingId
Validator.validatepassword = function ( password ) {
    // let pattern = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z[0-9]@$!%*?&]{7,20}$" );
    if( !password.match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/ ) ) {
        console.log( password )
        let err = new Error( "Error in password" );
        err.status = 406
        throw err;
    } else{
        return password;
    }
}

module.exports = Validator;