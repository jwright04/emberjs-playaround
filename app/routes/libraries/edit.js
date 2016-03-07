import Ember from 'ember';

export default Ember.Route.extend({

    model(params){
        return this.store.findRecord('library', params.library_id);
    },

    actions: {
        saveLibrary(newLibrary){
            newLibrary.save().then(() => this.transitionTo('libraries'));
        },

        willTransition(transition){
            let model = this.controller.get('model');

            if(model.get('hasDirtyAttributes')){
                let confirmation = confirm("Your changes haven't saved yet, would you like to leave this from?")

                if(confirmation){
                    model.rollbackAttributes();
                }else {
                    transition.abort();
                }
            }
        }
    }
});