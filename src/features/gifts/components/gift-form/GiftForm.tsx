/* eslint-disable import/no-cycle */
import './GiftForm.css';
import React, { useEffect, useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Box } from '@material-ui/core';
import { ValidationResult } from 'joi';
import GiftFormStepOne from './steps/GiftFormStepOne';
import GiftFormStepTwo from './steps/GiftFormStepTwo';
import GiftFormStepThree from './steps/GiftFormStepThree';
import GiftFormStepFour from './steps/GiftFormStepFour';
import GiftFormSuccess from './steps/GiftFormSuccess';
import { GIFT_FORM } from '../../../../core/constants/gift-form';
import {
  StepOneErrors,
  StepOneForm,
} from '../../models/gift-form-step-one.model';
import { ValidationsService } from '../../../../core/services/validations.service';
import {
  StepTwoErrors,
  StepTwoForm,
} from '../../models/gift-form-step-two.model';
import {
  StepThreeErrors,
  StepThreeForm,
} from '../../models/gift-form-step-three.model';
import { Category } from '../../../categories/models/category.model';
import CategoriesForm from '../../../categories/components/categories-form/CategoriesForm';
import ProductsForm from '../../../products/components/products-form/ProductsForm';
import {
  IGiftFormReduxProps,
  IGiftFormReduxActions,
} from './GiftFormContainer';
import { Product } from '../../../products/models/product.model';
import ProductsOutOfRange from '../../../products/components/products-out-of-range/ProductsOutOfRange';

type IGiftFormProps = IGiftFormReduxProps & IGiftFormReduxActions;

const GiftForm = ({
  gift,
  stepOneForm,
  stepTwoForm,
  stepThreeForm,
  stepFourForm,
  giftTypes,
  giftReasons,
  categories,
  category,
  products,
  product,
  giftsSent,
  saveStepOne,
  saveStepTwo,
  saveStepThree,
  saveStepFour,
  getGiftTypes,
  getGiftReasons,
  getCategories,
  getCategoryById,
  getProducts,
  getProductById,
  clearProductsData,
  clearStepOneData,
  clearStepTwoData,
  clearStepThreeData,
  clearStepFourData,
  clearGiftData,
  getGiftsSent,
}: IGiftFormProps): JSX.Element => {
  const [currentView, setCurrentView] = useState<string>(
    GIFT_FORM.VIEWS.STEPS_FORM
  );
  const [currentStep, setCurrentStep] = useState<number>(GIFT_FORM.STEPS.ONE);
  const [stepOneData, setStepOneData] = useState<StepOneForm>({
    senderName: '',
    receiverName: '',
  });
  const [stepTwoData, setStepTwoData] = useState<StepTwoForm>({
    typeId: '',
    reasonId: '',
    maxAmount: '500',
  });

  type StepThreeViewData = {
    categoryOpened: string;
    site: string;
    page: number;
    q: string;
  };
  const [stepThreeData, setStepThreeData] = useState<
    StepThreeForm & StepThreeViewData
  >({
    categories: [],
    products: [],
    categoryOpened: '',
    site: 'MLA',
    page: 1,
    q: '',
  });
  const [stepOneErrors, setStepOneErrors] = useState<StepOneErrors>({
    senderName: '',
    receiverName: '',
  });
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({
    typeId: '',
    reasonId: '',
    maxAmount: '',
    outOfRangeProducts: 0,
  });
  const [stepThreeErrors, setStepThreeErrors] = useState<StepThreeErrors>({
    error: '',
  });

  useEffect(() => {
    return () => {
      getGiftsSent(giftsSent.filters);
      clearStepOneData();
      clearStepTwoData();
      clearStepThreeData();
      clearStepFourData();
    };
  }, [
    getGiftsSent,
    giftsSent.filters,
    clearStepOneData,
    clearStepTwoData,
    clearStepThreeData,
    clearStepFourData,
  ]);

  useEffect(() => {
    getGiftTypes();
    getGiftReasons();
    getCategories();
    clearGiftData();
  }, [getGiftTypes, getGiftReasons, getCategories, clearGiftData]);

  useEffect(() => {
    const { loading, error, isSaveCompleted } = stepOneForm;
    if (!loading && isSaveCompleted && !error) {
      setCurrentStep(GIFT_FORM.STEPS.TWO);
      clearStepOneData();
    }
  }, [stepOneForm, setCurrentStep, clearStepOneData]);

  useEffect(() => {
    const { loading, error, isSaveCompleted } = stepTwoForm;
    if (!loading && isSaveCompleted && !error) {
      setCurrentStep(GIFT_FORM.STEPS.THREE);
      clearStepTwoData();
    }
  }, [stepTwoForm, setCurrentStep, clearStepTwoData]);

  useEffect(() => {
    const { loading, error, isSaveCompleted } = stepThreeForm;
    if (!loading && isSaveCompleted && !error) {
      setCurrentStep(GIFT_FORM.STEPS.FOUR);
      clearStepThreeData();
    }
  }, [stepThreeForm, setCurrentStep, clearStepThreeData]);

  useEffect(() => {
    const { loading, error, isSaveCompleted } = stepFourForm;
    if (!loading && isSaveCompleted && !error) {
      setCurrentView(GIFT_FORM.VIEWS.FORM_SUCCESS);
      getGiftsSent(giftsSent.filters);
      clearStepFourData();
    }
  }, [
    stepFourForm,
    setCurrentView,
    clearStepFourData,
    getGiftsSent,
    giftsSent.filters,
  ]);

  const validateStepOne = () => {
    const newState = { ...stepOneErrors };

    const errors: {
      senderName: ValidationResult;
      receiverName: ValidationResult;
    } = ValidationsService.stepOne(stepOneData);

    newState.senderName = ValidationsService.setErrorMessage(
      errors?.senderName?.error?.details[0]
    );

    newState.receiverName = ValidationsService.setErrorMessage(
      errors?.receiverName?.error?.details[0]
    );

    setStepOneErrors(newState);

    if (!newState.senderName && !newState.receiverName) {
      if (gift.data?.id) {
        saveStepOne(stepOneData, gift.data?.id);
      } else {
        saveStepOne(stepOneData);
      }
    }
  };

  const validateStepTwo = () => {
    const newState = { ...stepTwoErrors };

    const errors: {
      typeId: ValidationResult;
      reasonId: ValidationResult;
      maxAmount: ValidationResult;
    } = ValidationsService.stepTwo(stepTwoData);

    newState.typeId = ValidationsService.setErrorMessage(
      errors?.typeId?.error?.details[0]
    );

    newState.reasonId = ValidationsService.setErrorMessage(
      errors?.reasonId?.error?.details[0]
    );

    newState.maxAmount = ValidationsService.setErrorMessage(
      errors?.maxAmount?.error?.details[0]
    );

    const maxAmount = Number(stepTwoData.maxAmount);

    if (stepThreeData.products.length && maxAmount) {
      const outOfRange = stepThreeData.products.filter(
        (p) => p.price > maxAmount
      );

      newState.outOfRangeProducts = outOfRange.length;
    } else {
      newState.outOfRangeProducts = 0;
    }

    setStepTwoErrors(newState);

    if (
      !newState.typeId &&
      !newState.reasonId &&
      !newState.maxAmount &&
      newState.outOfRangeProducts
    ) {
      setCurrentView(GIFT_FORM.VIEWS.OUT_OF_RANGE_PRODUCTS);
    }

    if (
      !newState.typeId &&
      !newState.reasonId &&
      !newState.maxAmount &&
      !newState.outOfRangeProducts
    ) {
      saveStepTwo(stepTwoData, gift.data?.id as string);
      setStepThreeData({ ...stepThreeData, q: '' });
      clearProductsData();
    }
  };

  const validateStepThree = () => {
    const newState = { ...stepThreeErrors };

    if (!stepThreeData.categories.length && !stepThreeData.products.length) {
      newState.error =
        'Debes seleccionar al menos una categoría o un producto para continuar';
    } else {
      newState.error = '';
    }

    setStepThreeErrors(newState);

    if (!newState.error) {
      saveStepThree(stepThreeData, gift.data?.id as string);
    }
  };

  const handleNext = () => {
    switch (currentStep) {
      case GIFT_FORM.STEPS.ONE:
        validateStepOne();
        break;

      case GIFT_FORM.STEPS.TWO:
        validateStepTwo();
        break;

      case GIFT_FORM.STEPS.THREE:
        validateStepThree();
        break;

      default:
        break;
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    const { name, value } = e.target;
    const newStateStepOne = { ...stepOneData };
    const newStateStepTwo = { ...stepTwoData };
    const newStateStepThree = { ...stepThreeData };

    if (name === 'senderName') newStateStepOne.senderName = value as string;
    if (name === 'receiverName') newStateStepOne.receiverName = value as string;
    if (name === 'typeId') newStateStepTwo.typeId = value as string;
    if (name === 'reasonId') newStateStepTwo.reasonId = value as string;
    if (name === 'maxAmount') newStateStepTwo.maxAmount = value as string;
    if (name === 'inputSearch') newStateStepThree.q = value as string;

    setStepOneData(newStateStepOne);
    setStepTwoData(newStateStepTwo);
    setStepThreeData(newStateStepThree);
  };

  const handleView = (view: string) => {
    setCurrentView(view);
  };

  const deleteCategory = (meliId: string) => {
    const newState = { ...stepThreeData };

    newState.categories = stepThreeData.categories.filter(
      (c) => c.meliId !== meliId
    );

    setStepThreeData(newState);
  };

  const deleteProduct = (meliId: string) => {
    const newState = { ...stepThreeData };

    newState.products = stepThreeData.products.filter(
      (p) => p.meliId !== meliId
    );

    setStepThreeData(newState);
  };

  const getStep = () => {
    const steps = [
      <GiftFormStepOne
        handleFormData={handleFormData}
        formData={{
          senderName: stepOneData.senderName,
          receiverName: stepOneData.receiverName,
        }}
        formErrors={{
          senderName: stepOneErrors.senderName,
          receiverName: stepOneErrors.receiverName,
        }}
        storeData={{
          stepOneForm,
        }}
      />,
      <GiftFormStepTwo
        handleFormData={handleFormData}
        formData={stepTwoData}
        formErrors={stepTwoErrors}
        storeData={{
          stepTwoForm,
          giftTypes,
          giftReasons,
        }}
      />,
      <GiftFormStepThree
        formData={{
          categories: stepThreeData.categories,
          products: stepThreeData.products,
        }}
        formErrors={{
          error: stepThreeErrors.error,
        }}
        storeData={{
          stepThreeForm,
          categories,
        }}
        handleView={handleView}
        deleteCategory={deleteCategory}
        deleteProduct={deleteProduct}
      />,
      <GiftFormStepFour
        storeData={{
          stepFourForm,
          giftTypes: giftTypes.data,
          giftReasons: giftReasons.data,
        }}
        formData={{
          stepOne: stepOneData,
          stepTwo: stepTwoData,
          stepThree: stepThreeData,
        }}
      />,
    ];
    return steps[currentStep];
  };

  const isLastStep = (): boolean => currentStep === GIFT_FORM.STEPS.FOUR;
  const isFirstStep = (): boolean => currentStep === GIFT_FORM.STEPS.ONE;
  const isFormLoading = (): boolean => {
    return (
      stepOneForm.loading ||
      stepTwoForm.loading ||
      stepThreeForm.loading ||
      stepFourForm.loading
    );
  };

  const nextButton = () => {
    if (isLastStep()) {
      return (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => saveStepFour(gift.data?.id as string)}
          disabled={stepFourForm.loading}>
          Confirmar
        </Button>
      );
    }

    return (
      <Button
        size="small"
        onClick={handleNext}
        disabled={isLastStep() || isFormLoading()}>
        Siguiente
        <KeyboardArrowRight />
      </Button>
    );
  };

  const backButton = () => {
    return (
      <Button
        size="small"
        onClick={handleBack}
        disabled={isFirstStep() || isFormLoading()}>
        <KeyboardArrowLeft />
        Volver
      </Button>
    );
  };

  const openCategory = (id: string) => {
    const newState = { ...stepThreeData };

    if (stepThreeData.categoryOpened === id) {
      newState.categoryOpened = '';
    } else {
      newState.categoryOpened = id;
      getCategoryById(id);
    }

    setStepThreeData(newState);
  };

  const selectCategory = (selectedCategory: Category) => {
    const newState = { ...stepThreeData };

    if (
      !stepThreeData.categories.filter(
        (c) => c.meliId === selectedCategory.meliId
      ).length
    ) {
      newState.categories.push({
        ...selectedCategory,
        pathRoot: category.data ? [category.data] : [],
      });
    } else {
      newState.categories = stepThreeData.categories.filter(
        (c) => c.meliId !== selectedCategory.meliId
      );
    }

    setStepThreeData(newState);
  };

  const selectProduct = (selectedProduct: Product) => {
    const newState = { ...stepThreeData };

    if (
      !stepThreeData.products.filter((p) => p.meliId === selectedProduct.id)
        .length
    ) {
      newState.products.push({
        meliId: selectedProduct.id,
        name: selectedProduct.title,
        price: selectedProduct.price,
        picture: selectedProduct.thumbnail.replace('http', 'https'),
        meliCategoryId: selectedProduct.category_id,
      });
    } else {
      newState.products = stepThreeData.products.filter(
        (p) => p.meliId !== selectedProduct.id
      );
    }

    setStepThreeData(newState);
  };

  const searchProducts = (page = 1) => {
    getProducts({
      site: stepThreeData.site,
      maxAmount: Number(stepTwoData.maxAmount),
      filters: [{ filter: 'q', value: stepThreeData.q }],
      page,
    });

    const newState = { ...stepThreeData };
    newState.page = page;
    setStepThreeData(newState);
  };

  const nextProductsPage = () => {
    searchProducts(stepThreeData.page + 1);
  };

  const getView = (): JSX.Element => {
    const views: { [key: string]: JSX.Element } = {
      STEPS_FORM: (
        <>
          {getStep()}
          <Box position="fixed" bottom={0} width="100%">
            <MobileStepper
              variant="dots"
              steps={GIFT_FORM.NUM_STEPS}
              position="static"
              activeStep={currentStep}
              nextButton={nextButton()}
              backButton={backButton()}
            />
          </Box>
        </>
      ),
      CATEGORIES_FORM: (
        <CategoriesForm
          formData={{
            categories: stepThreeData.categories,
            categoryOpened: stepThreeData.categoryOpened,
          }}
          storeData={{
            categories,
            category,
          }}
          handleView={handleView}
          selectCategory={selectCategory}
          openCategory={openCategory}
        />
      ),
      PRODUCTS_FORM: (
        <ProductsForm
          formData={{
            site: stepThreeData.site,
            q: stepThreeData.q,
            page: stepThreeData.page,
            products: stepThreeData.products,
          }}
          storeData={{
            products,
          }}
          handleView={handleView}
          handleFormData={handleFormData}
          searchProducts={searchProducts}
          selectProduct={selectProduct}
          deleteProduct={deleteProduct}
          nextProductsPage={nextProductsPage}
        />
      ),
      OUT_OF_RANGE_PRODUCTS: (
        <ProductsOutOfRange
          productsSelected={stepThreeData.products}
          maxAmount={Number(stepTwoData.maxAmount)}
          handleView={handleView}
          deleteProduct={deleteProduct}
        />
      ),
      FORM_SUCCESS: <GiftFormSuccess storeData={{ gift }} />,
    };
    return views[currentView];
  };

  return <>{getView()}</>;
};

export default GiftForm;
