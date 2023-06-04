export function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:#CE3333;">This field is required.</span>';
      return false;
    }
    return true;
  }
  
  export function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
  }
  
