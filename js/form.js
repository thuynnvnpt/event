var elForm, elSelectPackage, elPackageHint, elterms, elTermsHint;
    elForm = document.getElementById('formSignup');
    elSelectPackage = document.getElementById('package');
    elPackageHint = document.getElementById('packageHint');
    elterms = document.getElementById('terms');
    elTermsHint = document.getElementById('termsHint');

    function packageHint() {
        var pack = this.options[this.selectedIndex].value;
        if (pack =='monthly'){
            elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
        }else {
            elPackageHint.innerHTML = 'Wise choise!';
        }
    }

    function checkTerm(event){
        if (!elTermsHint.checked){
            elTermsHint.innerHTML = 'you must agree to the terms.'
        }
    }
    elForm.addEventListener('submit', checkTerm, false);
    elSelectPackage.addEventListener('submit',checkTerms,false);
    elSelectPackage.addEventListener('change',packageHint, false);