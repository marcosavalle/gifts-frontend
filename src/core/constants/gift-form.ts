export const GIFT_FORM = {
  NUM_STEPS: 4,
  STEPS: {
    ONE: 0,
    TWO: 1,
    THREE: 2,
    FOUR: 3,
  },
  ERROR_MESSAGES: {
    REQUIRED: 'El campo es obligatorio',
    MIN_LENGTH: 'El campo debe contener al menos |n| caracteres',
    MAX_LENGTH: 'El campo debe contener como máximo |n| caracteres',
    MIN_AMOUNT: 'El monto mínimo es de |n|',
    MAX_AMOUNT: 'El monto máximo es de |n|',
  },
  VIEWS: {
    STEPS_FORM: 'STEPS_FORM',
    CATEGORIES_FORM: 'CATEGORIES_FORM',
    PRODUCTS_FORM: 'PRODUCTS_FORM',
    OUT_OF_RANGE_PRODUCTS: 'OUT_OF_RANGE_PRODUCTS',
    FORM_SUCCESS: 'FORM_SUCCESS',
  },
};

export const GIFT_SELECT_FORM = {
  ERROR_MESSAGES: {
    REQUIRED: 'El campo es obligatorio',
  },
  VIEWS: {
    MAIN_FORM: 'MAIN_FORM',
    PRODUCTS_FORM: 'PRODUCTS_FORM',
    FORM_SUCCESS: 'FORM_SUCCESS',
    ADDRESS_FORM: 'ADDRESS_FORM',
  },
};

export const GIFT_PAY_FORM = {
  ERROR_MESSAGES: {
    REQUIRED: 'El campo es obligatorio',
  },
  VIEWS: {
    PREVIOUS_PAY: 'PREVIOUS_PAY',
    PAY_RESULT: 'PAY_RESULT',
    ADDRESS_FORM: 'ADDRESS_FORM',
  },
};
