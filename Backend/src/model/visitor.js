const dbModel = require( '../utilities/connection' );

let visitorDb = {}

visitorDb.generateId=()=>{
    return dbModel.getUserCollection().then( ( model )=>{
        return model.find( {},{"orders": 1,_id: 0} ).then( ( ids )=>{
            console.log( ids );
            // console.log(ids.oli)
            const oid=[]
            for( let id of ids ){
                // console.log(id.orders)
                // console.log(id.orders[0].olive);
                // console.log(id['orders']);
                // console.log(id['orders'][0].oli);
                for( let k of id.orders ){
                    const u=k.olive
                    // console.log(u)
                    if( u in oid ){
                        continue;
                    } else{
                        oid.push( u )
                    }
                }
            }
            if( oid.length==0 ){
                oid.push( 1000 );
            }
            // console.log(oid)
            let uid=Math.max( ...oid );
            console.log( uid );              
            return uid+1;
        } )
    } )
}

visitorDb.registeruser= ( registeruser ) =>{
    return dbModel.getUserCollection().then( ( model )=>{
        return model.create( registeruser ).then( ( created )=>{
            // console.log(created)
            if( created ){
                // console.log(registeruser)
                // console.log(registeruser.uName)
                return registeruser.uName
            } else{
                return null
            }
        } )
    } )
}

// visitorDb.generateId = () => {
//     return dbModel.getUserCollection().then((model) => {
//         return model.distinct(orderId).then((ids) => {
//             let bId = Math.max(...ids);
//             return bId + 1;
//         })
//     })
// }

visitorDb.getAllUsers=()=>{
    return dbModel.getUserCollection().then( ( model )=>{
        return model.find( {},{phoneNo: 1,password: 1,orders: 1,uName: 1} ).then( ( users )=>{
            if( users.length == 0 ){
                return null
            } else{
                return users
            }
        } )
    } )
}

visitorDb.getAllProducts=()=>{
    return dbModel.getProductCollection().then( ( model )=>{
        return model.find().then( ( products )=>{
            if( products.length == 0 ){
                return null
            } else{
                return products
            }
        } )
    
    } )
}

// visitorDb.checkout=(emailId,pName)=>{
//     return dbModel.getUserCollection().then((model)=>{
//         console.log(model)
//         return visitorDb.generateId().then((uid)=>{
//             console.log(uid);
//             return model.updateOne({phoneNo : emailId},{$push :{orders : {olive : uid,pol : pName}}}).then((data)=>{
//                 return model.find({},{orders:1}).then((gopi)=>{
//                     console.log(gopi[0].orders)
//                 console.log(data);
//                 if(data.nModified==1){
//                     return uid;
//                 }else{
//                     return null;
//                 }
//             })
//             })
//         })
//     })
// }

visitorDb.checkout=( emailId,pName )=>{
    return dbModel.getProductCollection().then( ( model1 )=>{
        return model1.findOne( {pName: pName},{"pSeller.pQuantity": 1,"price": 1,"pSeller.pDiscount": 1 } ).then( ( quantity )=>{
            if( quantity["pSeller"]["pQuantity"] >0 ){
                console.log( quantity );
                return model1.updateOne( {pName: pName},{ $inc: { "pSeller.pQuantity": -1} } ).then( ( data )=>{
                    console.log( data );
                    console.log( quantity["pSeller"]["pDiscount"] )
                
    return dbModel.getUserCollection().then( ( model )=>{
        console.log( model )
        return visitorDb.generateId().then( ( uid )=>{
            console.log( uid );
            return model.updateOne( {phoneNo: emailId},{$push: {orders: {olive: uid,pol: pName,date: new Date(),price: quantity["price"],discount: quantity["pSeller"]["pDiscount"]}}} ).then( ( data )=>{
                return model.find( {},{orders: 1} ).then( ( gopi )=>{
                    console.log( gopi[0].orders )
                console.log( data );
                if( data.nModified==1 ){
                    console.log( quantity["pSeller"]["pQuantity"]-1 )
                    // a=quantity["pSeller"]["pQuantity"]-1
                    return{"orderId": uid,"quantity": quantity["pSeller"]["pQuantity"]};
                } else{
                    return null;
                }
            } )
            } )
        } )
    } )
} )
} else{
    return null
}
} )
} )
}

visitorDb.getuser=( email,password )=>{
    return dbModel.getUserCollection().then( ( model )=>{

        return model.find( {email: email, password},{_id: 0,email: 1} ).then( ( data )=>{
            if( data ){
                return data
            } else{
                return null
            }
        } )
    } )
}

module.exports = visitorDb 





















// visitorDb.register=(username,password)=>{
//     return dbModel.getUserCollection().then((model)=>{
//         return model.findOne({emailId : username}).then((data)=>{
//             if(!data){
//                 return "emailId"
//             }else{
//                 if(data.password==password){
//                     return dbModel.getProductCollection().then((pmodel)=>{
//                         if(!pmodel){
//                             return null
//                         }else{
//                             return pmodel
//                         }
//                     })
//                 }else{
//                     return "password"
//                 }
//             }
//         })
//     })
// }