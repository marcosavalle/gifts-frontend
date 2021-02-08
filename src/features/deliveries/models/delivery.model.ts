import { Address } from '../../addresses/models/address.model';
import { StatusHistoryItem } from '../../status/models/status-history.model';

export type Delivery = {
  id: string;
  deliveredDate: string;
  deliveryAddress: Address;
  statusesHistory: StatusHistoryItem[];
};
