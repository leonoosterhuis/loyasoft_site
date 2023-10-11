import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent implements OnInit {
  @Input() imgSrc: string = '';
  @Input() projectType: string = 'websites';
  @Input() description: string = '';
  @Input() websiteURL: string = '';
  protected readonly parent = parent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
