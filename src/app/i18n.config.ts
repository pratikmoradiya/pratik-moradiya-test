import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

// Function to load translations using an HttpLoaderFactory
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Function to set the default language and load translations
export function setupTranslateService(translate: TranslateService) {
  const local = localStorage.getItem('local');
  return () => {
    translate.setDefaultLang(local ? local : 'en');
    return translate.use(local ? local : 'en').toPromise();
  };
}

export const i18nConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true,
};
