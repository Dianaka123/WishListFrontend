export class DateUtilities{

  private static readonly howLongPeopleLeaveYears = 120;
  private static readonly FirstDayOfFirstMounthStr = "-01-01";

  public static get todayDate() { return new Date() };
  public static get todayDateStr(): string {
    return DateUtilities.ConvertDateToStr(this.todayDate);
  }
  public static get minYear(): number { return DateUtilities.todayDate.getFullYear() - DateUtilities.howLongPeopleLeaveYears};
  public static get minDateStr(): string { return DateUtilities.minYear + DateUtilities.FirstDayOfFirstMounthStr};
  public static get minDate(): Date { return DateUtilities.ConvertStrToDate(this.minDateStr)};

  public static ConvertStrToDate(dateStr: string): Date{
    return new Date(dateStr);
  }

  public static ConvertDateToStr(date: Date): string{
    return [
      date.getFullYear(),
      DateUtilities.padTo2Digits(date.getMonth() + 1),
      DateUtilities.padTo2Digits(date.getDate()),
      ].join('-');
  }

  private static padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
}
