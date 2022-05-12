import { types } from '../types/types';

export const OpenModalAddCustomer = () => ({ type: types.billingOpenModelAddCustomer });

export const CloseModalAddCustomer = () => ({ type: types.billingCloseModelAddCustomer });

export const OpenModalEditCustomer = () => ({ type: types.billingOpenModelEditCustomer });

export const CloseModalEditCustomer = () => ({ type: types.billingCloseModelEditCustomer });