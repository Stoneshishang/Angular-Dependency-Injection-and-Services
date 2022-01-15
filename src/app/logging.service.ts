import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) //this is the new syntax in Angular 8, add this for all services
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
