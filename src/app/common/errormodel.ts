export class ErrorModel {
  status: number;
  details: string;
  error: string;

  constructor(status: number, details: string, error: string) {
    this.status = status;
    this.details = details;
    this.error = error;
  }
}
