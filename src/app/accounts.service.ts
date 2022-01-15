import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({ providedIn: "root" }) //this is the new syntax in Angular 8, add this for all services
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];
  statusUpdated = new EventEmitter<string>();

  //Inject logging service.
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
