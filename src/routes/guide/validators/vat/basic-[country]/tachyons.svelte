<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/vat/basic-{item.code.toLowerCase()}" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-50 pa2">{item.adjective} VAT number</div>
                    <div class="fl w-40">
                        <input type="text" name="vatNumber" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ReceiveMessage>
</TachyonsLayout>

<script context="module">
export async function preload({ params }) {
    const { country } = params;

    const item = data.find((item) =>  {
        return item.code.toLowerCase() === country;
    });

    return {
        item,
    };
};
</script>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import vat from 'formvalidation/validators/vat/index';

import sampleCode from './tachyons.programmatic';
import data from '../data';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;
let item;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="vatNumber"]').value = v.sample;

    if (fv) {
        fv.revalidateField('vatNumber').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: `/guide/validators/vat/basic-${item.code.toLowerCase()}`,
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

onMount(() => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            vatNumber: {
                validators: {
                    vat: {
                        country: item.code,
                        message: `The value is not a valid ${item.adjective} VAT number`
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: `/guide/validators/vat/basic-${item.code.toLowerCase()}/tachyons`,
                sampleCode: sampleCode.replace(/{COUNTRY_CODE}/g, item.code).replace(/{COUNTRY_ADJECTIVE}/g, item.adjective),
            }),
        },
    }).registerValidator('vat', vat);

    return () => {
        fv.destroy();
    };
});

export {
    item,
};
</script>
