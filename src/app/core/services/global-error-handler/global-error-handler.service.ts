import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      if (confirm("New version of ownant available. Load New Version?")) {
        window.location.reload();
      }
    }

    console.log(error);
  }
}
