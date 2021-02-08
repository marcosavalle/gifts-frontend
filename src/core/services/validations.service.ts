/* eslint-disable @typescript-eslint/no-unsafe-return */
import Joi, { ValidationErrorItem, ValidationResult } from 'joi';
import { AddressForm } from '../../features/addresses/models/address.model';
import { StepOneForm } from '../../features/gifts/models/gift-form-step-one.model';
import { StepTwoForm } from '../../features/gifts/models/gift-form-step-two.model';
import { GIFT_FORM } from '../constants/gift-form';

export class ValidationsService {
  public static stepOne(
    data: StepOneForm
  ): {
    senderName: ValidationResult;
    receiverName: ValidationResult;
  } {
    const errors = {
      senderName: Joi.string()
        .min(2)
        .max(20)
        .required()
        .validate(data.senderName.trim()),
      receiverName: Joi.string()
        .min(2)
        .max(20)
        .required()
        .validate(data.receiverName.trim()),
    };

    return errors;
  }

  public static stepTwo(
    data: StepTwoForm
  ): {
    typeId: ValidationResult;
    reasonId: ValidationResult;
    maxAmount: ValidationResult;
  } {
    const errors = {
      typeId: Joi.string().alphanum().required().validate(data.typeId),
      reasonId: Joi.string().alphanum().required().validate(data.reasonId),
      maxAmount: Joi.number()
        .positive()
        .max(100000)
        .min(500)
        .required()
        .validate(data.maxAmount),
    };

    return errors;
  }

  public static address(
    data: AddressForm
  ): {
    street: ValidationResult;
    number: ValidationResult;
    postalCode: ValidationResult;
    localityId: ValidationResult;
    name: ValidationResult;
    contactPhone: ValidationResult;
    province: ValidationResult;
    description: ValidationResult;
  } {
    const errors = {
      street: Joi.string().min(2).max(70).required().validate(data.street),
      number: Joi.number().positive().required().validate(data.number),
      postalCode: Joi.number().positive().required().validate(data.postalCode),
      province: Joi.string().alphanum().required().validate(data.province),
      localityId: Joi.string().alphanum().required().validate(data.localityId),
      name: Joi.string().min(2).max(20).required().validate(data.name),
      contactPhone: Joi.number()
        .allow('')
        .positive()
        .validate(data.contactPhone),
      description: Joi.string()
        .min(2)
        .max(40)
        .allow('')
        .validate(data.description),
    };
    return errors;
  }

  public static setErrorMessage(
    error: ValidationErrorItem | undefined
  ): string {
    switch (error?.type) {
      case 'string.empty':
        return GIFT_FORM.ERROR_MESSAGES.REQUIRED;
        break;

      case 'number.base':
        return GIFT_FORM.ERROR_MESSAGES.REQUIRED;
        break;

      case 'string.min':
        return GIFT_FORM.ERROR_MESSAGES.MIN_LENGTH.replace(
          '|n|',
          error?.context?.limit
        );
        break;

      case 'number.min':
        return GIFT_FORM.ERROR_MESSAGES.MIN_AMOUNT.replace(
          '|n|',
          error?.context?.limit
        );
        break;

      case 'string.max':
        return GIFT_FORM.ERROR_MESSAGES.MAX_LENGTH.replace(
          '|n|',
          error?.context?.limit
        );
        break;

      case 'number.max':
        return GIFT_FORM.ERROR_MESSAGES.MAX_AMOUNT.replace(
          '|n|',
          error?.context?.limit
        );
        break;

      default:
        return '';
        break;
    }
    return '';
  }
}
