<MilligramLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="fv-row">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>
    
        <div class="fv-row">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>
    
        <div class="fv-row">
            <label>Size</label>
            <div>
                <input type="checkbox" name="size[]" value="s" id="sizeS" />
                <label class="label-inline" for="sizeS">S</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="m" id="sizeM" />
                <label class="label-inline" for="sizeM">M</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="l" id="sizeL" />
                <label class="label-inline" for="sizeL">L</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="xl" id="sizeXL" />
                <label class="label-inline" for="sizeXL">XL</label>
            </div>
        </div>
    
        <div class="fv-row">
            <label>Available in store</label>
            <div>
                <input type="radio" name="availability" value="yes" id="yesAvailable" />
                <label class="label-inline" for="yesAvailable">Yes</label>
            </div>
            <div>
                <input type="radio" name="availability" value="no" id="noAvailable" />
                <label class="label-inline" for="noAvailable">No</label>
            </div>
        </div>

        <div class="fv-row">
            <button type="submit" class="button-primary">Submit</button>
        </div>
    </form>
</MilligramLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Milligram from 'formvalidation/plugins/Milligram';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './milligram.programmatic';
import MilligramLayout from '../../../../../components/demo/MilligramLayout.svelte';

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
            milligram: new Milligram({
                rowSelector: '.fv-row',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/milligram/stacked-form/milligram',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
