import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer) { }

  transform(value: any, args?: any): any {
    if (args === 'html')
      return this.sanitizer.bypassSecurityTrustHtml(value);
    if (args === 'script')
      return this.sanitizer.bypassSecurityTrustScript(value);
    if (args === 'style')
      return this.sanitizer.bypassSecurityTrustStyle(value);
  }

}
