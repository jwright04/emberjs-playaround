import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        debugger;
        return this.store.createRecord('contact');
    },

    actions: {
        contactSubmit(newContact){
            debugger
            console.log("contactSubmit", newContact);
            newContact.save().then((success) => {
                console.log("success", success);
            }, (error)=>{
                console.log("error", error);
            });
        },
        willTransition(){

        }
    }
});
