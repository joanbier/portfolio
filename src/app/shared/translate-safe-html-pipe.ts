import {inject, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {map, Observable} from 'rxjs';

@Pipe({
  name: 'translateSafeHtml',
  pure: false
})
export class TranslateSafeHtmlPipe implements PipeTransform {
  private translate = inject(TranslateService);
  private sanitizer = inject(DomSanitizer);

  transform(key: string, params?: any): Observable<SafeHtml> {
    return this.translate.get(key, params).pipe(
      map((translated: string) => this.sanitizer.bypassSecurityTrustHtml(translated))
    );
  }
}
