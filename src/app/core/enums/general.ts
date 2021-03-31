export enum General {
  /*****************************************
   * Filter parameters.
   * ****************************************
   */
  PAGINATE_SMALL = 5,
  PAGINATE_MEDIUM = 10,
  PAGINATE_LARGE = 250,
  DEFAULT_PAGE = 0,
  DEFAULT_SEARCH = "",
  IMAGE_TYPE_PROFILE = "profile",

  /*****************************************
   * File types.
   * ****************************************
   */
  FILE_TYPE_BUILDING = "building",
  FILE_TYPE_BUSINESS = "business",
  FILE_TYPE_PROFILE = "profile",
  FILE_TYPE_TICKET = "ticket",

  /*****************************************
   * Roles
   * ****************************************
   */
  ROLE_SUPER_ADMIN = "Super Admin",
  ROLE_BUILDING_OWNER = "Building Owner",
  ROLE_BUILDING_MANAGER = "Building Manager",
  ROLE_TENANT = "Tenant",
  ROLE_GATEKEEPER = "Gatekeeper",

  /*****************************************
   * Modules
   * ****************************************
   */
  SCOPE_BUSINESS = "business",
  SCOPE_BUILDING = "building",
  /**
   * Imageable Types
   */
  NEWS = "news",
}
