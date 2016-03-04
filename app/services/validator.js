import Ember from 'ember';

export default Ember.Service.extend( {

    validateFields( fields ){
        //let str         = "";
        let validateArr = [];
        for ( var i = 0 ; i < fields.length ; i++ ) {

            if ( fields[ i ].validate && fields[ i ].data.length > 1 ) {
                //do a check for confirmation email
                if ( fields[ i ].name === 'Email' && fields[ i ].data !== fields[ i ].dataConfirm) {
                    //
                    validateArr.push("Emails Do Not Match");
                }
            }
            else {
                //push required fields into array
                validateArr.push( fields[ i ].name );
            }
        }
        return validateArr;
    }
} );
