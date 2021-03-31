import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "timeAgo",
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      var stillUtc = moment.utc(value).toDate();
      var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");
      return moment(local).fromNow();
    }
  }
}
