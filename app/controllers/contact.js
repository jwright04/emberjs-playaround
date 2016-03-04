import Ember from 'ember';

export default Ember.Controller.extend({
    allValid: Ember.computed('InputName', function () {
        console.log("ALL VALID CHECK");
        return false; //this.get('InputName') === '';

    }),

    isDisabled:       false, //this.get('allValid'),
    InputName:        "",
    InputEmailFirst:  "",
    InputEmailSecond: "",
    InputMessage:     "",
    ErrorMessage:     "",
    validator:        Ember.inject.service(),

    actions: {
        contactSubmit(newContact){
            //debugger;
            let errorMsg  = "";
            let allFields = [
                {
                    name:     'Name',
                    data:     this.model.InputMessage,
                    validate: true
                },
                {
                    name:        'Email',
                    data:        this.model.InputEmailFirst,
                    dataConfirm: this.model.InputEmailSecond,
                    validate:    true
                },
                {
                    name:     'Message',
                    data:     this.model.InputMessage,
                    validate: true
                }
            ];

            if (this.get('validator').validateFields(allFields).length === 0) {
                this.set('contactSubmitSuccess', 'Thank you for your submission');
                //debugger
                console.log("contactSubmit", newContact);
                newContact.save().then((success) => console.log("contact submit success", success));
                return;
            }
            else {
                this.get('validator').validateFields(allFields).map((value) => {

                    errorMsg += " " + value + ",";
                });
            }
            //get rid of the last comma
            this.set('contactSubmitError', errorMsg.slice(0, -1));
        }
    }
});
