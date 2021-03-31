import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import DateUtils from "@core/utilities/date-utils";
import { IValidationErrorMessages } from "./../interfaces/validation-error-messages";

@Injectable({
  providedIn: "root",
})
export class ErrorMessageService {
  constructor() {}
  getValidationErrorMessage(validatorName: string, validatorValue: any, customConfig?: IValidationErrorMessages) {
    const config = {
      required: "This field is required.",
      email: "This email is invalid.",
      minlength: `This field must have minimum length ${validatorValue.requiredLength}`,
      maxlength: `This field must have maximum length ${validatorValue.requiredLength}`,
      pattern: "Invalid URL",
      mobile_number: "Mobile is invalid",
      invalidLength: `This field must have length ${validatorValue.requiredLength}`,
      requiredFileType: "Invalid file type",
      requiredFileSize: "Invalid file size",
      min: `This field must have value greater than ${validatorValue.min - 1}`,
      max: `This field should not have value greater than ${validatorValue.max}`,
      invalidAmountFormat: `This amount value is invalid. Must not exceed 999999999.99`,
      invalidPassword:
        "Password should be 8 to 16 characters containing lowercase, uppercase, numbers and special characters",
      matDatepickerMin: `Date must be after ${DateUtils.subtractOneDay(validatorValue.min)}`,
    };

    return customConfig ? customConfig[validatorName] : config[validatorName];
  }

  handleServerSideError(formGroup: FormGroup, error: any) {
    if (error.statusCode === 400 && error.data) {
      Object.keys(error.data).forEach((prop) => {
        const formControl = formGroup.get(prop);
        if (formControl) {
          formControl.setErrors({
            serverError: error.data[prop],
          });
        }
      });
    }
  }
}
