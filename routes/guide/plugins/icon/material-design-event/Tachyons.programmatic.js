export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Size</div>
                <div class="fl w-75">
                    <div class="mb2">
                        <label><input type="checkbox" name="size[]" value="s" /> S</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="size[]" value="m" /> M</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="size[]" value="l" /> L</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Available in store</div>
                <div class="fl w-75">
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="yes" /> Yes</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="availability" value="no" /> No</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(document.getElementById('demoForm'), {
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
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'material-icons icon-valid',
                    invalid: 'material-icons icon-invalid',
                    validating: 'material-icons icon-validating',
                }),
            },
        })
        .on('plugins.icon.set', function(e) {
            if (e.iconElement) {
                switch (e.status) {
                    case 'Validating':
                        e.iconElement.innerHTML = 'graphic_eq';
                        break;

                    case 'Invalid':
                        e.iconElement.innerHTML = 'clear';
                        break;

                    case 'Valid':
                        e.iconElement.innerHTML = 'check';
                        break;

                    default:
                        e.iconElement.innerHTML = '';
                        break;
                }
            }     
        });
});
</script-tag>
</body>
</html>
`;