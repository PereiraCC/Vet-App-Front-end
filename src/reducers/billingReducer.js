import { types } from '../types/types';

const initialState = {
    modalAddCustomerOpen: false,
    modalEditCustomerOpen: false,
    modalMAGCustomerOpen: false,
};

export const BillingReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.billingOpenModelAddCustomer:
            return {
               ...state,
                modalAddCustomerOpen: true,
            }

        case types.billingCloseModelAddCustomer:
            return {
                ...state,
                modalAddCustomerOpen: false,
            }

        case types.billingOpenModelEditCustomer:
            return {
                ...state,
                modalEditCustomerOpen: true,
            }

        case types.billingCloseModelEditCustomer:
            return {
                ...state,
                modalEditCustomerOpen: false,
            }

        case types.billingOpenModelMAGCustomer:
            return {
                ...state,
                modalMAGCustomerOpen: true,
            }

        case types.billingCloseModelMAGCustomer:
            return {
                ...state,
                modalMAGCustomerOpen: false,
            }
    
        default:
            return state;
    }

}