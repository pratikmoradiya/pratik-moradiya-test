import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLanguage!: string;
  supportedLanguages: string[] = ['en', 'fr', 'cu'];
   
  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.getDefaultLang();
  }

  ngOnInit(): void {
  
  }

  changeLanguage(language: string) {
    localStorage.setItem('local', language);
    this.translate.use(language);
    this.currentLanguage = language;
  }

}
