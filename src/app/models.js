
export class User {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(
        id?: string,
        user_id?: string,
        userName?: string,
        type?: string,
        fullName?: string,
        firstName?: string,
        middleName?: string,
        lastName?: string,
        email?: string,
        mobile?: string,
        userCategory?: string,
        userlevel?: string,
        userRole?: string,
        role_name?: string,
        roles?: string[],
        skills_alpha_role?: string,
        address1?: string,
        address2?: string,
        address3?: string,
        country?: string,
        state?: string,
        city?: string,
        district?: string,
        pincode?: number,
        is_trainer?: string,
        is_trainer_supervisor?: string,
        dob?: string,
        centre_id?: [],
        centreName?: [],

        accessToken?: string,
        id_token?: string,
        resetPwdKey?: string,
        refresh_token?: string,
        expires_in?: number,
        current_user?: string,
        isSpecial?: boolean,
        isActive?: boolean,
        userTypeId?: string,
        lcid?: number,
        applicationTenantlinkId?: number,
        isSuperUser?: boolean,
        organizationId?: number,
        passwordExpirationDate?: Date,
        userTypeName?: string,
        fileName?: string,

        // +++++++++
    ) {
        this.id = id;
        this.user_id = user_id;
        this.userCategory = userCategory;
        this.userlevel = userlevel;
        this.userRole = userRole;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.mobile_number = mobile;
        this.roles = roles;
        this.role_name = role_name;
        this.skills_alpha_role = skills_alpha_role;
        this.address1 = address1;
        this.address2 = address2;
        this.address3 = address3;
        this.country = country;
        this.state = state;
        this.city = city;
        this.district = district;
        this.pincode = pincode;
        this.is_trainer = is_trainer;
        this.is_trainer_supervisor = is_trainer_supervisor;
        this.dob = dob;
        this.centre_id = centre_id;
        this.accessToken = accessToken;
        this.id_token = id_token;
        this.resetPwdKey = resetPwdKey;
        this.refresh_token = refresh_token;
        this.expires_in = expires_in;
        this.current_user = current_user;
        this.isSpecial = isSpecial;
        this.isActive = isActive;
        this.userTypeId = userTypeId;
        this.applicationTenantlinkId = applicationTenantlinkId;
        this.lcid = lcid;
        this.isSuperUser = isSuperUser;
        this.organizationId = organizationId;
        this.passwordExpirationDate = passwordExpirationDate;
        this.userTypeName = userTypeName;
        this.fileName = fileName;
    }

    get friendlyName(): string {
        const name = this.fullName || this.userName;
        return name;
    }

    public id: string;
    public user_id: string;
    public userCategory: string;
    public userlevel: string;
    public userRole: string;
    public userName: string;
    public fullName: string;
    public email: string;
    public mobile_number: string;
    public skills_alpha_role: string;
    public address1: string;
    public address2: string;
    public address3: string;
    public country: string;
    public state: string;
    public city: string;
    public district: string;
    public pincode: number;
    public is_trainer: string;
    public is_trainer_supervisor: string;
    public dob: string;
    public centre_id: [];
    public isEnabled: boolean;
    public isLockedOut: boolean;
    public roles: string[];
    public role_name: string;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public userTypeId: string;
    public userTypeName: string;
    public accessToken: string;
    public id_token: string;
    public resetPwdKey: string;
    public refresh_token: string;
    public expires_in: number;
    public current_user: string;
    public isSpecial: boolean;
    public isActive: boolean;
    public lcid: number;
    public applicationTenantlinkId: number;
    public isSuperUser: boolean;
    public organizationId: number;
    public passwordExpirationDate: Date;
    public fileName: string;
}

export interface UserInterface {
    id?;
    user_id?;
    user_category?;
    user_level?;
    user_role?;
    skills_alpha_role?;
    address1?;
    address2?;
    address3?;
    country?;
    state?;
    city?;
    district?;
    pin_code?;
    is_trainer?;
    is_trainer_supervisor?;
    dob?;
    tenent_id?;
    language_id?;
    center_id?;
    first_name?;
    middle_name?;
    last_name?;
    email?;
    mobile?;
    timezone?;
    active?;
    last_login_at?;
    last_login_ip?;
    created_by?;
    updated_by?;
    deleted_at?;
}

export enum Role {
    User = 'User',
    Admin = 'Administrator',
    Student = 'Student',
    Facilitator = 'Facilitator',
    Trainer = 'Trainer',
    Counsellor = 'Counsellor',
}