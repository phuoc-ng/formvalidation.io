<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Color</div>
                <div class="fl w-50">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100"
                        name="color"
                        type="color" 
                        data-fv-color__message="The color code is not valid" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import Declarative from 'formvalidation/plugins/Declarative';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import color from 'formvalidation/validators/color';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        plugins: {
            declarative: new Declarative({
                html5Input: true,
            }),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/color/html5/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('color', color);

    return () => {
        fv.destroy();
    };
});
</script>
