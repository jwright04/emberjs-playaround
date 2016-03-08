import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.store.findRecord('invitation', params.invitation_id)
    },
    actions : {
        updateInvite(inviteEmail){
            inviteEmail.save().then(() => this.transitionTo('admin.invitations.view'))
        },

        willTransition(transition){
            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes won't be saved!");

                if (confirmation) {
                    model.rollbackAttributes();
                }
                else {
                    transition.abort();
                }
            }
        }
    }
});