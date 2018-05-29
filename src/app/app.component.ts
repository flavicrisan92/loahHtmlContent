import { Component } from '@angular/core';
import { FetchHtmlService } from './services/fetchhtml.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name: string;
  safeHtmlContent: string;
  htmlService: FetchHtmlService;

  constructor(htmlService: FetchHtmlService) {
    this.htmlService = htmlService;

    this.initHtmlPage();
   
    this.findExternalScriptsInHtmlString().forEach(element => {
      this.downloadJS(element);
    });
  }

  initHtmlPage(): any {
    this.safeHtmlContent = this.htmlService.getHtml();
  }

  findExternalScriptsInHtmlString(): any[] {
    var result = [];
    var parser = new DOMParser();
    let document = parser.parseFromString(this.safeHtmlContent, 'text/xml');
    let elements = document.getElementsByTagName('script');

    for (var i = 0; i < elements.length; i++) {
      var src = elements[i].getAttribute('src');
      if (src && result.indexOf(src) === -1) result.push(src);
    }
    return result;
  }

  downloadJS(fileURL) {
    var script = document.createElement('script');
    script.src = (fileURL);
    document.head.appendChild(script);
  }
}
