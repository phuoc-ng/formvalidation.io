<BootstrapLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker3.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST" style="height: 380px;">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Event</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="name" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Date</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="date" />
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </ResourceLoader>
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
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not valid'
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
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-bootstrap-datepicker/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });

    jQuery('[name="date"]')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            fv.revalidateField('date');
        });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
