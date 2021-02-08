import { Status } from './status.model';
import { User } from '../../users/models/user.model';

export type StatusHistoryItem = {
  status: Status;
  date: string;
  user: User;
};
