<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="Username" />
        </div>
    
        <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" />
        </div>
    
        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
        <button type="submit" class="btn btn-primary">Sign in</button>
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
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
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
                sender: '/guide/plugins/bootstrap/without-label-form/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });    
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
