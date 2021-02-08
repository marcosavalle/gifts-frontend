/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import { CategoriesState } from '../../../categories/models/categories.model';
import { CategoryState } from '../../../categories/models/category.model';
import { getCategoriesThunk } from '../../../categories/store/categories.thunks';
import { getCategoryThunk } from '../../../categories/store/category.thunks';
import { GiftReasonState } from '../../../gift-reasons/models/gift-reason.model';
import { getGiftReasonsThunk } from '../../../gift-reasons/store/gift-reason.thunks';
import { GiftTypeState } from '../../../gift-types/models/gift-type.model';
import { getGiftTypesThunk } from '../../../gift-types/store/gift-type.thunks';
import { ProductState } from '../../../products/models/product.model';
import {
  ProductInputFilters,
  ProductsState,
} from '../../../products/models/products.model';
import { getProductThunk } from '../../../products/store/product.thunks';
import { getProductsThunk } from '../../../products/store/products.thunks';
import {
  StepOneForm,
  StepOneFormState,
} from '../../models/gift-form-step-one.model';
import {
  StepThreeForm,
  StepThreeFormState,
} from '../../models/gift-form-step-three.model';
import {
  StepTwoForm,
  StepTwoFormState,
} from '../../models/gift-form-step-two.model';
import { GiftsFilters, GiftState } from '../../models/gift.model';
import { saveStepOneThunk } from '../../store/gift-form-step-one.thunks';
import { saveStepThreeThunk } from '../../store/gift-form-step-three.thunks';
import { saveStepTwoThunk } from '../../store/gift-form-step-two.thunks';
import GiftForm from './GiftForm';
import { clearData as clearProductData } from '../../../products/store/products.actions';
import { clearData as clearStepOneData } from '../../store/gift-form-step-one.actions';
import { clearData as clearStepTwoData } from '../../store/gift-form-step-two.actions';
import { clearData as clearStepThreeData } from '../../store/gift-form-step-three.actions';
import { clearData as clearStepFourData } from '../../store/gift-form-step-four.actions';
import { clearData as clearGiftData } from '../../store/gift.actions';
import { saveStepFourThunk } from '../../store/gift-form-step-four.thunks';
import { StepFourFormState } from '../../models/gift-form-step-four.model';
import { getGiftsSentThunk } from '../../store/gifts-sent.thunks';
import { GiftsSentState } from '../../models/gifts-sent.model';

export interface IGiftFormReduxProps {
  gift: GiftState;
  stepOneForm: StepOneFormState;
  stepTwoForm: StepTwoFormState;
  stepThreeForm: StepThreeFormState;
  stepFourForm: StepFourFormState;
  giftTypes: GiftTypeState;
  giftReasons: GiftReasonState;
  categories: CategoriesState;
  category: CategoryState;
  products: ProductsState;
  product: ProductState;
  giftsSent: GiftsSentState;
}

export interface IGiftFormReduxActions {
  saveStepOne: (data: StepOneForm, id?: string) => void;
  saveStepTwo: (data: StepTwoForm, id: string) => void;
  saveStepThree: (data: StepThreeForm, id: string) => void;
  saveStepFour: (id: string) => void;
  getGiftTypes: () => void;
  getGiftReasons: () => void;
  getCategories: () => void;
  getCategoryById: (id: string) => void;
  getProducts: (filters: ProductInputFilters) => void;
  getProductById: (id: string) => void;
  clearProductsData: () => void;
  clearStepOneData: () => void;
  clearStepTwoData: () => void;
  clearStepThreeData: () => void;
  clearStepFourData: () => void;
  clearGiftData: () => void;
  getGiftsSent: (filters: GiftsFilters) => void;
}

const mapStateToProps = ({
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
}: AplicationState): IGiftFormReduxProps => {
  return {
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
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IGiftFormReduxActions => ({
  saveStepOne: (data: StepOneForm, id?: string) =>
    dispatch(saveStepOneThunk(data, id)),
  saveStepTwo: (data: StepTwoForm, id: string) =>
    dispatch(saveStepTwoThunk(data, id)),
  saveStepThree: (data: StepThreeForm, id: string) =>
    dispatch(saveStepThreeThunk(data, id)),
  saveStepFour: (id: string) => dispatch(saveStepFourThunk(id)),
  getGiftTypes: () => dispatch(getGiftTypesThunk()),
  getGiftReasons: () => dispatch(getGiftReasonsThunk()),
  getCategories: () => dispatch(getCategoriesThunk()),
  getCategoryById: (id: string) => dispatch(getCategoryThunk(id)),
  getProducts: (filters: ProductInputFilters) =>
    dispatch(getProductsThunk(filters)),
  getProductById: (id: string) => dispatch(getProductThunk(id)),
  clearProductsData: () => dispatch(clearProductData()),
  clearStepOneData: () => dispatch(clearStepOneData()),
  clearStepTwoData: () => dispatch(clearStepTwoData()),
  clearStepThreeData: () => dispatch(clearStepThreeData()),
  clearStepFourData: () => dispatch(clearStepFourData()),
  clearGiftData: () => dispatch(clearGiftData()),
  getGiftsSent: (filters: GiftsFilters) => dispatch(getGiftsSentThunk(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftForm);
