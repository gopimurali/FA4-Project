const validator = require( "../src/utilities/validator" )

describe( " testing validators ",()=>{
    it( 'email correct format',()=>{
    const email="pmvgk@gmail.com"
    expect( validator.validatemailId( email ) ).toEqual( email )
} );
it( 'password testing format',()=>{
    const password="As!23456"
    expect( validator.validatepassword( password ) ).toEqual( password )
} );
it( 'email wrong format',()=>{
    const email="pmvgk"
    expect( ()=>{ validator.validatemailId( email ) } ).toThrowError( "Error in email Id" )
} )


} );