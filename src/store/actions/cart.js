const axios = require('axios');

export const addToCart = (variant, checkout ) =>dispatch =>{
    console.log( variant , checkout);
    return axios({
        url: `/cart/clear`,
        method: 'POST',
    }).then ( res => {

       return axios({
            url: `/cart/add.js`,
            method: 'POST',
            data:{
                quantity: 1,
                id: variant,
            }
        }).then(res=>{

            document.location = checkout

        })   .catch ( e => {
            console.log( 'add cart error ',  e )
        } );

    } )
        .catch ( e => {
            console.log( 'error in react  cart',  e )
        } );
}