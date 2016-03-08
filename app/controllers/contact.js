import Ember from 'ember';

export default Ember.Controller.extend({


    setMessage(status, message = null){
        switch(status){

            case 'success':
                this.set('contactSubmitSuccess', 'Thank you for your submission');
                break;
            case 'error':
                this.set('contactSubmitError', message);
                break;
        }
    }
});
