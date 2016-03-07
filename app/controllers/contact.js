import Ember from 'ember';

export default Ember.Controller.extend({


    setMessage(status, message = null){
        switch(status){

            case 'success':
                console.log("SUCCESS NOW");
                this.set('contactSubmitSuccess', 'Thank you for your submission');
                break;
            case 'error':
                console.log("ERROR NOW");
                this.set('contactSubmitError', message);
                break;
        }
    }
});
