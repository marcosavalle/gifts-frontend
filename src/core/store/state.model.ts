import { CategoriesState } from '../../features/categories/models/categories.model';
import { CategoryState } from '../../features/categories/models/category.model';
import { GiftReasonState } from '../../features/gift-reasons/models/gift-reason.model';
import { GiftTypeState } from '../../features/gift-types/models/gift-type.model';
import { StepFourFormState } from '../../features/gifts/models/gift-form-step-four.model';
import { StepOneFormState } from '../../features/gifts/models/gift-form-step-one.model';
import { StepThreeFormState } from '../../features/gifts/models/gift-form-step-three.model';
import { StepTwoFormState } from '../../features/gifts/models/gift-form-step-two.model';
import { GiftState } from '../../features/gifts/models/gift.model';
import { GiftsReceivedState } from '../../features/gifts/models/gifts-received.model';
import { GiftsSentState } from '../../features/gifts/models/gifts-sent.model';
import { ProductState } from '../../features/products/models/product.model';
import { ProductsState } from '../../features/products/models/products.model';
import { StatusState } from '../../features/status/models/status.model';
import { GiftStatusesHistoryState } from '../../features/status/models/gift-status-history.model';
import { GiftAcceptState } from '../../features/gifts/models/gift-accept.model';
import { GiftSelectState } from '../../features/gifts/models/gift-select.model';
import { AddressesState } from '../../features/addresses/models/addresses.model';
import { AddressFormState } from '../../features/addresses/models/address.model';
import { ProvincesState } from '../../features/provinces/models/provinces.model';
import { LocalitiesState } from '../../features/localities/models/localities.model';
import { MostChosenState } from '../../features/most-chosen/models/most-chosen.model';
import { GiftResetState } from '../../features/gifts/models/gift-reset.model';
import { GiftPaymentUrlState } from '../../features/gifts/models/gift-payment-url.model';
import { GiftBuyState } from '../../features/gifts/models/gift-buy.model';
import { GiftCancelState } from '../../features/gifts/models/gift-cancel.model';
import {
  CategoriesStatisticsReceiverState,
  CategoriesStatisticsSenderState,
} from '../../features/statistics/models/statistics-categories.model';
import {
  GiftsStatisticsReceiverState,
  GiftsStatisticsSenderState,
} from '../../features/statistics/models/statistics-gifts.model';
import {
  BudgetStatisticsReceiverState,
  BudgetStatisticsSenderState,
} from '../../features/statistics/models/statistics-budget.model';

export interface AplicationState {
  categories: CategoriesState;
  category: CategoryState;
  stepOneForm: StepOneFormState;
  stepTwoForm: StepTwoFormState;
  stepThreeForm: StepThreeFormState;
  stepFourForm: StepFourFormState;
  giftTypes: GiftTypeState;
  giftReasons: GiftReasonState;
  gift: GiftState;
  products: ProductsState;
  product: ProductState;
  giftsReceived: GiftsReceivedState;
  giftsSent: GiftsSentState;
  status: StatusState;
  giftStatusesHistory: GiftStatusesHistoryState;
  giftAccept: GiftAcceptState;
  giftSelect: GiftSelectState;
  giftReset: GiftResetState;
  addresses: AddressesState;
  address: AddressFormState;
  provinces: ProvincesState;
  localities: LocalitiesState;
  mostChosenProductsSender: MostChosenState;
  mostChosenProductsReceiver: MostChosenState;
  mostChosenCategoriesSender: MostChosenState;
  mostChosenCategoriesReceiver: MostChosenState;
  giftPaymentUrl: GiftPaymentUrlState;
  giftBuy: GiftBuyState;
  giftCancel: GiftCancelState;
  categoriesStatisticsSender: CategoriesStatisticsSenderState;
  categoriesStatisticsReceiver: CategoriesStatisticsReceiverState;
  giftsStatisticsSender: GiftsStatisticsSenderState;
  giftsStatisticsReceiver: GiftsStatisticsReceiverState;
  budgetStatisticsSender: BudgetStatisticsSenderState;
  budgetStatisticsReceiver: BudgetStatisticsReceiverState;
}
