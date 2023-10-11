import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'LS-Site';


  ngOnInit() {
    const scriptPaths = [
      'assets/template/aos/aos.js',
      // 'assets/template/bootstrap/js/bootstrap.bundle.min.js',
      // 'assets/template/glightbox/js/glightbox.min.js',
      // 'assets/template/isotope-layout/isotope.pkgd.min.js',
      // 'assets/template/swiper/swiper-bundle.min.js',
      // 'assets/template/waypoints/noframework.waypoints.js',
      'assets/js/core/main_template.js',
    ];

    scriptPaths.forEach((scriptPath) => {
      const script = document.createElement('script');
      script.src = scriptPath;
      script.async = false;
      script.defer = true; // Voeg defer toe
      script.onload = () => {
      };

      document.head.appendChild(script);
    });
  }
}
