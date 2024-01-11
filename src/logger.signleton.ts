import { LogTypes } from "./enums/log-types.enum";

export class Logger {
  private static instance: Logger;

  private logId: number;

  private constructor() {
    this.logId = 0;
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }

  private log(type: string, text: string) {
    console.log(`[${this.logId}] ${type} ${text}`);
    this.logId++;
  }

  public info(text: string) {
    this.log(LogTypes.INFO, text);
  }

  public error(text: string) {
    this.log(LogTypes.ERROR, text);
  }
}
