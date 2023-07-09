class DateUtil {
  static format(date: Date, format: string): string {
    const _date = new Date(date); // Date 객체로 만들어줍니다.

    return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
      switch (t) {
        case "yyyy":
          return _date.getFullYear();
        case "mm":
          return _date.getMonth() + 1;
        case "dd":
          return _date.getDate();
        case "MM":
          return this.zero(_date.getMonth() + 1);
        case "DD":
          return this.zero(_date.getDate());
        case "H":
          return this.zero(_date.getHours());
        case "i":
          return this.zero(_date.getMinutes());
        case "s":
          return this.zero(_date.getSeconds());
        default:
          return "";
      }
    });
  }

  static zero(value: number | string) {
    return value.toString().length === 1 ? `0${value}` : value;
  }
}

export default DateUtil;
