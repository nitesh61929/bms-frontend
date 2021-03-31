import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imagePath",
})
export class ImagePathPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return value;
    }
    return "/assets/images/placeholder-img.jpg";
  }
}
