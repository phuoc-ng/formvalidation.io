<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" name="name" />
        </div>
    
        <div class="form-group">
            <label>Price</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input type="text" class="form-control" name="price" />
            </div>
        </div>
    
        <div class="form-group">
            <label>Size</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="s" />
                <label class="form-check-label">S</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="m" />
                <label class="form-check-label">M</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="l" />
                <label class="form-check-label">L</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="xl" />
                <label class="form-check-label">XL</label>
            </div>
        </div>
    
        <div class="form-group">
            <label>Available in store</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="yes" />
                <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="no" />
                <label class="form-check-label">No</label>
            </div>
        </div>
    
        <div class="form-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="btn btn-primary">Add product</button>
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
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap/stacked-form/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
