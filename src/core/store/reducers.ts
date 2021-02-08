import { categoriesReducer } from '../../features/categories/store/categories.reducer';
import { giftReasonsReducer } from '../../features/gift-reasons/store/gift-reason.reducer';
import { giftTypesReducer } from '../../features/gift-types/store/gift-type.reducer';
import { stepOneFormReducer } from '../../features/gifts/store/gift-form-step-one.reducer';
import { stepTwoFormReducer } from '../../features/gifts/store/gift-form-step-two.reducer';
import { stepThreeFormReducer } from '../../features/gifts/store/gift-form-step-three.reducer';
import { giftReducer } from '../../features/gifts/store/gift.reducer';
import { categoryReducer } from '../../features/categories/store/category.reducer';
import { productReducer } from '../../features/products/store/product.reducer';
import { productsReducer } from '../../features/products/store/products.reducer';
import { stepFourFormReducer } from '../../features/gifts/store/gift-form-step-four.reducer';
import { giftsReceivedReducer } from '../../features/gifts/store/gifts-received.reducer';
import { giftsSentReducer } from '../../features/gifts/store/gifts-sent.reducer';
import { statusReducer } from '../../features/status/store/status.reducer';
import { giftStatusesHistoryReducer } from '../../features/status/store/gift-status-history.reducer';
import { giftAcceptReducer } from '../../features/gifts/store/gift-accept.reducer';
import { giftSelectReducer } from '../../features/gifts/store/gift-select.reducer';
import { addressesReducer } from '../../features/addresses/store/addresses.reducer';
import { addressFormReducer } from '../../features/addresses/store/address.reducer';
import { provincesReducer } from '../../features/provinces/store/provinces.reducer';
import { localitiesReducer } from '../../features/localities/store/localities.reducer';
import {
  mostChosenCategoriesReceiverReducer,
  mostChosenCategoriesSenderReducer,
  mostChosenProductsReceiverReducer,
  mostChosenProductsSenderReducer,
} from '../../features/most-chosen/store/most-chosen.reducer';
import { giftResetReducer } from '../../features/gifts/store/gift-reset.reducer';
import { giftPaymentUrlReducer } from '../../features/gifts/store/gift-payment-url.reducer';
import { giftBuyReducer } from '../../features/gifts/store/gift-buy.reducer';
import { giftCancelReducer } from '../../features/gifts/store/gift-cancel.reducer';
import { categoriesStatisticsSenderReducer } from '../../features/statistics/store/statistics-categories-sender.reducer';
import { categoriesStatisticsReceiverReducer } from '../../features/statistics/store/statistics-categories-receiver.reducer';
import { giftsStatisticsSenderReducer } from '../../features/statistics/store/statistics-gifts-sender.reducer';
import { giftsStatisticsReceiverReducer } from '../../features/statistics/store/statistics-gifts-receiver.reducer';
import { budgetStatisticsSenderReducer } from '../../features/statistics/store/statistics-budget-sender.reducer';
import { budgetStatisticsReceiverReducer } from '../../features/statistics/store/statistics-budget-receiver.reducer';

export const rootReducer = {
  categories: categoriesReducer,
  products: productsReducer,
  stepOneForm: stepOneFormReducer,
  stepTwoForm: stepTwoFormReducer,
  stepThreeForm: stepThreeFormReducer,
  stepFourForm: stepFourFormReducer,
  giftTypes: giftTypesReducer,
  giftReasons: giftReasonsReducer,
  gift: giftReducer,
  product: productReducer,
  category: categoryReducer,
  giftsReceived: giftsReceivedReducer,
  giftsSent: giftsSentReducer,
  status: statusReducer,
  giftStatusesHistory: giftStatusesHistoryReducer,
  giftAccept: giftAcceptReducer,
  giftSelect: giftSelectReducer,
  giftReset: giftResetReducer,
  addresses: addressesReducer,
  address: addressFormReducer,
  provinces: provincesReducer,
  localities: localitiesReducer,
  mostChosenProductsSender: mostChosenProductsSenderReducer,
  mostChosenProductsReceiver: mostChosenProductsReceiverReducer,
  mostChosenCategoriesSender: mostChosenCategoriesSenderReducer,
  mostChosenCategoriesReceiver: mostChosenCategoriesReceiverReducer,
  giftPaymentUrl: giftPaymentUrlReducer,
  giftBuy: giftBuyReducer,
  giftCancel: giftCancelReducer,
  categoriesStatisticsSender: categoriesStatisticsSenderReducer,
  categoriesStatisticsReceiver: categoriesStatisticsReceiverReducer,
  giftsStatisticsSender: giftsStatisticsSenderReducer,
  giftsStatisticsReceiver: giftsStatisticsReceiverReducer,
  budgetStatisticsSender: budgetStatisticsSenderReducer,
  budgetStatisticsReceiver: budgetStatisticsReceiverReducer,
};
