import { Injectable } from '@angular/core';

@Injectable()
export class DBkeys {

    // public static readonly CURRENT_USER = 'current_user';
    public static readonly CURRENT_USER = 'user_details';
    public static readonly USER_PERMISSIONS = 'user_permissions';
    public static readonly ACCESS_TOKEN = 'access_token';
    public static readonly ID_TOKEN = 'id_token';
    public static readonly REFRESH_TOKEN = 'refresh_token';
    public static readonly TOKEN_EXPIRES_IN = 'expires_in';
    public static readonly REMEMBER_ME = 'remember_me';


    public static readonly LANGUAGE = 'language';
    public static readonly HOME_URL = 'home_url';
    public static readonly THEME = 'theme';
    public static readonly SHOW_DASHBOARD_STATISTICS = 'show_dashboard_statistics';
    public static readonly SHOW_DASHBOARD_NOTIFICATIONS = 'show_dashboard_notifications';
    public static readonly SHOW_DASHBOARD_TODO = 'show_dashboard_todo';
  public static readonly SHOW_DASHBOARD_BANNER = 'show_dashboard_banner';

  public static readonly SHOW_DashboardPersonalInfo = 'show_DashboardPersonalInfo';
  public static readonly SHOW_DashboardGraph = 'show_DashboardGraph';
  public static readonly SHOW_DashboardApplicationStatus = 'show_DashboardApplicationStatus ';
  public static readonly SHOW_DashboardTaskList = 'show_DashboardTaskList';

  public static readonly APPLICATION_NAME = 'app_name';
  public static readonly APPLICATION_KEY = 'app_tenantkey';
  public static readonly APPLICATION_TENANTID = 'app_tenantLinkId';
  public static readonly APPLICATION_THEMEID = 'app_themeId';
  public static readonly APPLICATION_LCID = 'app_lcid';
}
