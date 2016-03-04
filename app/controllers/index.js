import Ember from 'ember';

export default Ember.Controller.extend( {

    isValid      : Ember.computed.match( 'emailAddress', /^.+@.+\..+$/ ),
    isDisabled   : Ember.computed.not( 'isValid' ),
    emailAddress : '',

    actualEmailAddress  : Ember.computed( 'emailAddress', function () {
        console.log( "actualEmailAddress function is called", this.get( 'emailAddress' ) );
    } ),
    emailAddressChanged : Ember.observer( 'emailAddress', function () {
        console.log( "observer is called", this.get( 'emailAddress' ) );
    } ),
    actions             : {
        saveInvitation(){
            const email         = this.get( 'emailAddress' );
            const newInvitation = this.store.createRecord( 'invitation', { email : email } );
            newInvitation.save().then( ( response )=> {
                this.set( 'responseMessage', `Thank you, we've saved your email address: ${this.get( 'emailAddress' )}` );
                this.set( 'emailAddress', '' );
            } );
        }
    }
} );
