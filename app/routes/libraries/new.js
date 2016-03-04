import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        debugger;
        return this.store.createRecord('library');
    },
    actions : {
        saveLibrary(newLibrary){
            debugger;
            newLibrary.save().then(()=> this.transitionTo('libraries'))
        },
        willTransition(){
            this.controller.get('model').rollbackAttributes();
        }
    }
});