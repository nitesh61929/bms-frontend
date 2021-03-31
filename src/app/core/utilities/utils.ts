import { IParameters } from "./../../shared/interfaces/parameters";
export default class Utils {
  /**
   *
   * @param value
   */
  static getFirstCharacter(value: string): string {
    if (value) {
      const firstChar = value.charAt(0);
      return firstChar.toUpperCase().toString();
    }
  }

  /**
   *
   * @param param
   */
  static checkParameters(param: IParameters) {
    if (param) {
      Object.entries(param).forEach(([key, value]) => {
        // if (key === "page") {
        //   param[key] = value + 1;
        // }
        if (value === "" || value === null || value === undefined) {
          delete param[key];
        }
      });

      const stringParams = Utils.convertPropertiesToString(param);
      return stringParams;
    }
  }

  /**
   *
   * @param obj
   */
  static convertPropertiesToString(obj: any) {
    Object.entries(obj).forEach(([key, value]) => {
      obj[key] = value.toString();
    });
    return obj;
  }

  /**
   *
   * @param param
   */
  static getFilteredParams(param: any) {
    Object.entries(param).forEach(([key, value]) => {
      if (value === "" || value === null) {
        delete param[key];
      }
    });

    return param;
  }

  static getSubDomain() {
    const full = window.location.host;
    const parts = full.split(".");

    const sub = parts[0];
    const domain = parts[1];
    const type = parts[2];

    return sub;
  }

  static getUrlParts() {
    const full = window.location.host;
    const parts = full.split(".");
    return parts;
  }

  static urlIsApp() {
    return Utils.getUrlParts().includes("app");
  }

  static urlIsAdmin() {
    return Utils.getUrlParts().includes("admin");
  }

  static toTitleCase(str) {
    if (str) {
      return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }

  static getNepaliCurrency(number: any) {
    var no, point, hundred, digits_1, i, str, words, digits, divider, counter, result, points;
    number = number.toString().split(".");
    no = number[0];
    point = number[1];
    hundred = "";
    digits_1 = no.length;
    i = 0;
    str = new Array();
    words = {
      "0": "",
      "1": "One",
      "2": "Two",
      "3": "Three",
      "4": "Four",
      "5": "Five",
      "6": "Six",
      "7": "Seven",
      "8": "Eight",
      "9": "Nine",
      "10": "Ten",
      "11": "Eleven",
      "12": "Twelve",
      "13": "Thirteen",
      "14": "Fourteen",
      "15": "Fifteen",
      "16": "Sixteen",
      "17": "Seventeen",
      "18": "Eighteen",
      "19": "Nineteen",
      "20": "Twenty",
      "30": "Thirty",
      "40": "Forty",
      "50": "Fifty",
      "60": "Sixty",
      "70": "Seventy",
      "80": "Eighty",
      "90": "Ninety",
    };
    digits = new Array("", "Hundred", "Thousand", "Lakh", "Crore");
    while (i < digits_1) {
      divider = i == 2 ? 10 : 100;
      number = Math.floor(no % divider);
      no = Math.floor(no / divider);
      i += divider == 10 ? 1 : 2;
      if (number) {
        counter = str.length;
        hundred = counter == 1 && str[0] ? " " : "";
        str.push(
          number < 21
            ? words[number] + " " + digits[counter] + " " + hundred
            : words[Math.floor(number / 10) * 10] + " " + words[number % 10] + " " + digits[counter] + " " + hundred
        );
      } else {
        str.push("");
      }
    }
    str = str.reverse();
    result = str.join("");
    const parsedPoint = (point / 10).toString();
    var pointWord;
    if (point) {
      if (parseInt(point) > 0 && parseInt(point) < 10 && point.toString().length == 1) {
        pointWord = words[parseInt(point) * 10];
      } else if (parseInt(point) > 10 && parseInt(point) < 20) {
        pointWord = words[parseInt(point)];
      } else if (parseInt(point) >= 20 && point % 10 == 0) {
        pointWord = words[parseInt(point)];
      } else {
        pointWord = words[parseInt(parsedPoint) * 10] + " " + words[(point = point % 10)];
      }
    }
    points = point ? pointWord + " Paisa Only." : "";
    const rupeesWord = point ? "Rupees and " : "Rupees Only.";
    return (result + rupeesWord + points).replace(/  +/g, " ");
  }

  static getRoundOffValue(num: number) {
    return Math.round(num * 100) / 100;
  }

  static getUserBrowserOS() {
    if (navigator.userAgent.match(/Android/i)) {
      return "android";
    }
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      return "ios";
    }
    if (navigator.userAgent.match(/IEMobile|Opera Mini|BlackBerry/i)) {
      return "other";
    }
    return "unknown";
  }
}
