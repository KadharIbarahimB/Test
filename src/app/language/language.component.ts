import { Component } from '@angular/core';
import {  Renderer2 } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  selectedLanguage: string = 'en'; 
  languageOptions = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' } 
   
  ];
  constructor(private renderer: Renderer2) {}

  changeLanguage() {
    if (this.selectedLanguage === 'ar') 
    {
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
    } 
    else 
    {
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
    }
  }
}
