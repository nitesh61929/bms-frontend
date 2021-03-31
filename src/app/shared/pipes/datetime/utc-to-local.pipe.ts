import { Pipe, PipeTransform } from "@angular/core";
import DateUtils from "@core/utilities/date-utils";

@Pipe({
  name: "utcToLocalDate",
})
export class UtcToLocalPipe implements PipeTransform {
  transform(value: string, format?: string): unknown {
    if (value) {
      return DateUtils.convertUTCToLocal(value, format);
    }
    return "N/A";
  }
}
