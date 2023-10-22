import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    status: [Validators.required],
    species: [Validators.required],
    type: [],
    gender: [Validators.required],
    bestSentences: []
  },
};

export const formValidation = createFormikValidation(validationSchema);
