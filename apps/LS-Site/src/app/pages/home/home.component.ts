import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private seoService: SeoService) {
    seoService.setSEOData("Home", "Homepagina")
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.filterSelection('all');
  }

  filterSelection(c: string) {
    this.setActiveButton(c)
    const elements = this.el.nativeElement.querySelectorAll('.column');
    elements.forEach((element: Element) => {
      if (c === 'all' || element.classList.contains(c)) {
        this.w3AddClass(element, 'show');
      } else {
        this.w3RemoveClass(element, 'show');
      }
    });
  }

  w3AddClass(element: Element, name: string) {
    this.renderer.addClass(element, name);
  }

  w3RemoveClass(element: Element, name: string) {
    this.renderer.removeClass(element, name);
  }

  setActiveButton(activeClass: string) {
    const filterElements = this.el.nativeElement.querySelectorAll('.filter');

    filterElements.forEach((element: { classList: { contains: (arg0: string) => any; }; }) => {
      if (element.classList.contains('filter-active')) {
        this.renderer.removeClass(element, 'filter-active');
      }
    });

    activeClass = "#filter-" + activeClass
    const filterWebsitesElement = this.el.nativeElement.querySelector(activeClass);
    if (filterWebsitesElement) {
      this.renderer.addClass(filterWebsitesElement, 'filter-active');
    }
  }
}
