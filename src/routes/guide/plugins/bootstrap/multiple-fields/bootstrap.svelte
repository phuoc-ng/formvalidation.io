<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Full name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Address</label>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="city" placeholder="City" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="state" placeholder="State" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>
    
        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The first name can only consist of alphabetical and space'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The last name can only consist of alphabetical and space'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'The state is required'
                    }
                }
            },
            zipcode: {
                validators: {
                    notEmpty: {
                        message: 'The zipcode is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-sm-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.col-sm-3';
                        
                        default:
                            return '.form-group';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap/multiple-fields/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });    
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
