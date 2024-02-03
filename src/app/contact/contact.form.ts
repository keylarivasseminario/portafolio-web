import { FormControl, FormGroup, Validators } from '@angular/forms';

export const ContactDataForm = () =>
  new FormGroup({
    from_name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    from_email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern('^(.*[@][A-Za-z]*[.][A-Za-z]*)$'),
    ]),
  });
