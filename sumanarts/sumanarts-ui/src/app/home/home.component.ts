import { Component, OnInit } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlide,
} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/services/user.service';
import { HideIfClaimsNotMetDirective } from '../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../shared/utils/claimReq-utils';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'art-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgbCarousel, NgbSlide],
})
export class HomeComponent implements OnInit {
  images: string[] = [];
  showNavigationArrows = true;
  showNavigationIndicators = true;

  claimReq = claimReq;
  constructor(private userService: UserService) {}
  imageFiles: string[] = [];
  ngOnInit(): void {
    this.userService.getImagefiles().subscribe({
      next: (imageFiles: string[]) => {
        this.images = imageFiles.map((filename) => `/SlideImg/${filename}`);
        console.log('Retrieved image files:', this.images);
      },
      error: (err: any) => {
        console.log('error while retrieving filenames');
      },
    });
    // this.images = [
    //   'SlideImg/bhaktapur.jpg',
    //   '/SlideImg/kathmandu.jpg',
    //   '/SlideImg/susan.jpg',
    //   '/SlideImg/village.jpg',
    //   '/SlideImg/monestary.jpg',
    // ];
  }

  saveImage() {}
}
