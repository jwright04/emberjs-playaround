import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.findRecord('contact', params.contact_id);
    },
    actions: {
        updateContact(contactData){

            contactData.save().then(() => this.transitionTo('admin.contacts.view'));
        },
        willTransition(transition){
            let model = this.controller.get('model');

            if(model.get('hasDirtyAttributes')){

                let confirmation = confirm("Your changes haven't saved yet, would you like to leave this from?");

                if(confirmation){
                    model.rollbackAttributes();
                }else {
                    transition.abort();
                }
            }
        }
    }
});