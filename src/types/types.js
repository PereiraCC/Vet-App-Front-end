
export const types = {

    // Sidebar actions
    ShowSidebar: '[Sidebar] ShowSidebar',
    HideSidebar: '[Sidebar] HideSidebar',
    ShowSidebarUser: '[Sidebar] ShowSidebarUser',
    HideSidebarUser: '[Sidebar] HideSidebarUser',

    // Tabs actions
    AddTab: '[Tabs] AddTab',
    SelectTab: '[Tabs] SelectTab',
    DeleteTab: '[Tabs] DeleteTab',
    DeleteAllTabs: '[Tabs] DeleteAllTabs',

    // Login
    login : '[Login] Login',
    logout : '[Login] Logout',
    loginSetErrorCentro    : '[Login] Set Error Centro',
    loginRemoveErrorCentro : '[Login] Remove Error Centro',
    loginSetErrorUserName    : '[Login] Set Error UserName',
    loginRemoveErrorUserName : '[Login] Remove Error UserName',
    loginSetErrorPassword    : '[Login] Set Error Password',
    loginRemoveErrorPassword : '[Login] Remove Error Password',
    loginStartLoading  : '[Login] Start Loading',
    loginFinishLoading : '[Login] Finish Loading',

    // Inventory actions
    SelectTabInventory: '[Inventory] SelectTabInventory',
    
    // Customers actions
    SelectTabCustomers: '[Customers] SelectTabCustomers',

    // Settings actions
    SelectTabSettings: '[Settings] SelectTabSettings',

    // Pays actions
    SelectTabPays: '[Pays] SelectTabPays',

    // Billing actions
    billingOpenModelAddCustomer: '[Billing] Open Model Add Customer',
    billingCloseModelAddCustomer: '[Billing] Close Model Add Customer',

}