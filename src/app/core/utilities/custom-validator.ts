import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  /**
   *
   * @param inputLength
   */
  static inputLengthValidator(inputLength: number): object | null {
    return (control: FormControl) => {
      if (control.value) {
        const characterLength = control.value.toString().length;
        if (characterLength !== inputLength) {
          return { invalidLength: { requiredLength: inputLength } };
        }
      }
      return null;
    };
  }

  static mobileNumber(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value !== null) {
        const MOBILE_NUMBER_REGEXP = /^$|^((\\+91-?)|0)?[0-9]{10}$/g;

        return MOBILE_NUMBER_REGEXP.test(control.value)
          ? null
          : {
              mobile_number: {
                valid: false,
              },
            };
      }
    };
  }

  static checkPassword(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (formGroup: FormGroup) => {
      const pass = formGroup.get(passwordField).value;
      const confirmPass = formGroup.get(confirmPasswordField).value;

      if (pass && confirmPass) {
        if (pass !== confirmPass) {
          return {
            compare_password: {
              valid: false,
            },
          };
        }
      }
      return null;
    };
  }

  static requiredFileType(types: Array<string>) {
    return (control: FormControl) => {
      const file = control.value;
      if (file && file.fileExtension) {
        if (types && types.indexOf(file.fileExtension.toLowerCase()) === -1) {
          return {
            invalidFileFormat: true,
          };
        }
        return null;
      }
      return null;
    };
  }

  static requiredFileSize(size: number) {
    return (control: FormControl) => {
      const file = control.value;
      if (file) {
        if (file.fileSizeInKb >= size) {
          return {
            invalidFileSize: true,
          };
        }
        return null;
      }
      return null;
    };
  }

  static requiredMaintenanceAmount(amountField: string) {
    return (formGroup: FormGroup) => {
      const amount = parseInt(formGroup.get(amountField).value);
      if (amount === 0) {
        return {
          maintenance_amount: {
            valid: false,
          },
        };
      }
      return null;
    };
  }

  static requiredMaintenanceCategories(maintenanceCategories: string) {
    return (formGroup: FormGroup) => {
      const categories = formGroup.get(maintenanceCategories).value;
      if (!categories || (categories && categories.length === 0)) {
        return {
          maintenance_categories: {
            valid: false,
          },
        };
      }
      return null;
    };
  }

  static isValidAmount(): ValidatorFn {
    return (control: FormControl) => {
      const value = control.value;
      if (value) {
        const pattern = /^(?!$)\d{0,9}(?:\.\d{1,2})?$/;
        const isValid = pattern.test(value);
        if (!isValid) {
          return {
            invalidAmountFormat: true,
          };
        }
      }
      return null;
    };
  }

  static isValidPassword(): ValidatorFn {
    return (control: FormControl) => {
      const value = control.value;
      if (value) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#&()\-[{}\]:;',?/*~$^+=<>."`%_\\|]).{8,16}$/;
        const isValid = pattern.test(value);
        if (!isValid) {
          return {
            invalidPassword: true,
          };
        }
      }
      return null;
    };
  }
}
