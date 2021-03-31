export interface INotification {
  entityType: string;
  entityId: string;
  notificationType?: string;
  message: string;
  extras: {};
  status: true;
  seen: true;
  id: number;
}
