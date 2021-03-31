import * as moment from "moment";
import * as momentTimeZone from "moment-timezone";

export default class DateUtils {
  /**
   *
   * @param dateTime
   * @param {string} format
   * @returns {string}
   */
  static convertDateTimeFormat(dateTime: any, format: string): string {
    return moment(dateTime).format(format);
  }

  /**
   *
   * @param {string} dateTime
   * @param format
   * @returns {string}
   */
  static convertUTCToLocal(dateTime: string, format: string = "Y-MM-DD HH:MM"): string {
    return moment.utc(dateTime).local().format(format);
  }

  /**
   *
   * @param {string} dateTime
   * @param format
   * @returns {string}
   */
  static convertLocalToUTC(dateTime: string, format: string = "Y-MM-DD HH:MM"): string {
    return moment.utc(dateTime).format(format);
  }

  /**
   *@returns {string}
   */
  static getCurrentTimeZone() {
    return momentTimeZone.tz.guess();
  }

  static millisToMinutesAndSeconds(millis) {
    const minutes: any = Math.floor(millis / 60000);
    const seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return (minutes > 0 ? minutes + " min " : "") + (seconds > 0 ? seconds + " sec" : "");
  }

  static getCurrentLocalTime() {
    return moment().local().format("HH:mm:ss");
  }

  static getUtcDateTime(date: string) {
    const currentTime = this.getCurrentLocalTime();
    const localDateTime = date + " " + currentTime;
    return moment.utc(moment(localDateTime)).format("Y-MM-DD HH:mm:ss");
  }

  static convertUtcDateTimeToLocalDate(utcDateTime: string) {
    const localDateTime = DateUtils.convertUTCToLocal(utcDateTime, "Y-MM-DD HH:mm:ss");
    const localDate = DateUtils.convertDateTimeFormat(localDateTime, "YYYY-MM-DD");
    return localDate;
  }

  static convertLocalDateTimeToUtcDateTime(localDateTime: string) {
    const localDate = DateUtils.convertDateTimeFormat(localDateTime, "YYYY-MM-DD");
    const utcDateTime = DateUtils.getUtcDateTime(localDate);
    return utcDateTime;
  }

  static subtractOneDay(value) {
    const oneDayLess = moment(value).subtract(1, "day").format("MM/DD/YYYY");
    return oneDayLess;
  }
}
