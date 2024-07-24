const db = require( '../model/visitor' );
const validator = require( '../utilities/validator' )
let vservice = {}

vservice.registeruser=( registeruser )=>{
    return db.registeruser( registeruser ).then( ( data )=>{
        // console.log(data)
        if( !data ){
            let err =new Error( "user cannot registered" );
            err.status=404;
            throw err;
        } else{
            return data
        }
    } )
}

vservice.getAllUsers=()=>{
    return db.getAllUsers().then( ( users )=>{
        if( users==null ){
            let err =new Error( "user not registered" );
            err.status=404;
            throw err;
        } else{
            return users
        }
    } )
}

vservice.getAllProducts=()=>{
    return db.getAllProducts().then( ( products )=>{
        if( products==null ){
            let err = new Error( "sorry for the inconvinience" );
            err.status=404;
            throw err;
        } else{
            return products
        }
    } )
}
vservice.checkout=( emailId,pName )=>{
    return db.checkout( emailId,pName ).then( ( uid )=>{
        if( uid ){
            return uid
        } else{
            let err=new Error( "cannot update orderid" ); 
            err.status=404;
            throw err;
        }
    } )
}

vservice.getuser=( email, password )=>{
   if( validator.validatemailId( email ) ){
       if( validator.validatepassword( password ) ){
           return db.getusername( email,password ).then( ( data )=>{
               if( data ){
                   return data
               } else{
                   let err = new Error( 'unable to find' )
                   err.status=404
                   throw err
               }
           } )
       }
   }
}




module.exports = vservice;





















// vservice.register = (username,password)=>{
//     return db.register(username,password).then((visitor)=>{
//         if(visitor == "emailId"){
//             let err = new Error("user not registered! register to proceed");
//             err.status = 404;
//             throw err;
//         }else{
//                 if(visitor=="password"){
//                     let err = new Error("Incorrect password!!");
//                     err.status = 404;
//                     throw err;
//                 }else{
//                     if(visitor==null){
//                         let err=new Error("Sorry for inconvienience!");
//                         err.status=404;
//                         throw err;
//                     }else{
//                         return visitor
//                     }
//                 }
            
//         }
//     })
// }
