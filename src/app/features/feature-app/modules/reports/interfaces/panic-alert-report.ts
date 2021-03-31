export interface IPanicAlertReport {
  id?: string;
  unitName: string;
  tenantName: string;
  createdDateTime: Date;
  gateKeeperName: string;
  getGateKeeperMobileNumber: string;
  responseIntervalInMilliSeconds: number;
}
