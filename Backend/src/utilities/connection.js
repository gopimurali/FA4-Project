const{ Schema } = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
Mongoose.set( 'useCreateIndex', true )
const url = "mongodb://localhost:27017/Hoopla_DB";

const userSchema = Schema( {
    emaiId: String,
    password: String,
    uName: String,
    phoneNo: String,
    orderId: [{type: Number}],
    prodName: [{type: String}],
    orders: [
        {
            olive: Number,
            pol: String,
            date: Date,
            price: Number,
            discount: Number
        }
    ]
}, { collection: "User" } );

const sellerSchema = Schema( {
    // eslint-disable-next-line camelcase
    s_Id: String,
    pDiscount: Number,
    pQuantity: Number,
    pShippingCharges: Number
} )
const productSchema = Schema( {
    _id: Number,
    pName: String,
    pDescription: String,
    pRating: Number,
    pCategory: String,
    price: Number,
    color: String,
    image: String,
    specification: String,
    dateFirstAvailable: Date,
    dateLastAvailable: Date,
    pSeller: {type: sellerSchema 
    }
  }, { collection: "Product" } )

let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'User', userSchema )
    // eslint-disable-next-line no-unused-vars
    } ).catch( ( error ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getProductCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'Product', productSchema )
    // eslint-disable-next-line no-unused-vars
    } ).catch( ( error ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

module.exports = collection;