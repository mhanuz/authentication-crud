export interface UserMenus{
    permittedMenus: PermittedMenuDto [];
    userInfo: UserInfo;
    permittedActions: PermittedActionsOutputDto [] ;
}

interface PermittedMenuDto{
    menuName: string | null;
    systemMenuName: string | null;
    menuId: number;
    routePath: string | null;
    parentId: number;
    fActionId: number;
    isMenuBind: number;
    iconClass: string | null;
    iconViewBox: string | null;
    order: number;
    isHome: number;
}

interface UserInfo{
    id: number;
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    userName: string | null;
    imagePath: string | null;
    userType: number;
    userTypeName: string;
    userRoles: string | null;
    isActive: boolean;
    installerId: number;
    installerType: number;
    companyId: number;
    shortCode: string;
}

interface PermittedActionsOutputDto{
    userId: number;
    menuId: number;
    mapId: number;
    menuName: string | null;
    systemMenuName: string | null;
    httpVerb: string | null;
    apiUrl: string | null;
}