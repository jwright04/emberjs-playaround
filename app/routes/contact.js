import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.createRecord('contact');
    },

    allValid : Ember.computed('InputName', function () {
        console.log("ALL VALID CHECK");
        return false; //this.get('InputName') === '';

    }),

    isDisabled       : false, //this.get('allValid'),
    InputName        : "",
    InputEmailFirst  : "",
    InputEmailSecond : "",
    InputMessage     : "",
    ErrorMessage     : "",
    showSuccess      : false,
    validator        : Ember.inject.service(),

    actions : {
        contactSubmit(newContact){
            let errorMsg  = "";
            let allFields = [
                {
                    name     : 'Name',
                    data     : newContact.get('InputName'),
                    validate : true
                },
                {
                    name        : 'Email',
                    data        : newContact.get('InputEmailFirst'),
                    dataConfirm : newContact.get('InputEmailSecond'),
                    validate    : true
                },
                {
                    name     : 'Message',
                    data     : newContact.get('InputMessage'),
                    validate : true
                }
            ];

            if (this.get('validator').validateFields(allFields).length === 0) {

                newContact.save().then((success) => {
                    this.controllerFor('contact').setMessage('success');

                }, (error) => {
                    this.controllerFor('contact').setMessage('error', error);
                });
                newContact.rollbackAttributes();
                return;
            }
            else {
                this.get('validator').validateFields(allFields).map((value) => {

                    errorMsg += " " + value + ",";
                });
            }
            //using -1 to get rid of last comma
            this.controllerFor('contact').setMessage('error', errorMsg.slice(0, -1));
        }
    }
});
