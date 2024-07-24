const express = require( 'express' );
const routing = express.Router();
const create = require( '../model/dbsetup' );
const vserve = require( '../service/visitor' );
const RegisterUser = require( '../model/userregister' );





routing.get( '/setupDb', ( req, res, next ) => {
    create.setupDb().then( ( data ) => {
        res.send( data )
    } ).catch( ( err ) => {
        next( err )
    } )
} )

routing.post( '/registeruser',( req, res, next ) =>{
    const registeruser = new RegisterUser( req.body );    
    console.log( registeruser )
    vserve.registeruser( registeruser ).then( ( registered ) => {
        // console.log(registered)
        res.json( { "message": "succesfully registered "+registered } );
    } ).catch( ( err ) => next( err ) )
} )

routing.get( '/getuser',( req, res, next )=>{
    vserve.getuser().then( ( user )=>{
        res.json( user );
    } ).catch( ( err )=> next( err ) )
} )

routing.get( '/getAllUsers', ( req, res, next ) => {
    vserve.getAllUsers().then( ( users ) => {
        res.json( users );
    } ).catch( ( err ) => next( err ) )
} )

routing.get( '/getAllProducts', ( req, res, next ) => {
    vserve.getAllProducts().then( ( products ) => {
        res.json( products );
    } ).catch( ( err ) => next( err ) )
} )

routing.get( '/checkout/:emailId/:pName',( req,res,next )=>{
    let emailId=req.params.emailId;
    let pName=req.params.pName
    console.log( pName )
    console.log( emailId )
    vserve.checkout( emailId,pName ).then( ( uid )=>{
        res.json( uid );
    } ).catch( ( err )=> next( err ) )
} )



module.exports = routing;