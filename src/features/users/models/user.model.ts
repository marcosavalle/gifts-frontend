/* eslint-disable import/no-cycle */
import { Address } from '../../addresses/models/address.model';
import { Gift } from '../../gifts/models/gift.model';

type ShortUser = {
  id: string;
  name: string;
  lastName: string;
  avatarUrl: string;
};

type CompleteUser = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  avatarUrl: string;
  giftSent: Gift[];
  giftReceived: Gift[];
  points: number;
};

export type User = ShortUser | CompleteUser;
