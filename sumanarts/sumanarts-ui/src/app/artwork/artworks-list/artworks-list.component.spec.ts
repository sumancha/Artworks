import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksListComponent } from './artworks-list.component';

describe('ArtworksListComponent', () => {
  let component: ArtworksListComponent;
  let fixture: ComponentFixture<ArtworksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworksListComponent]
    });
    fixture = TestBed.createComponent(ArtworksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
