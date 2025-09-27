import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkAddComponent } from './artwork-add.component';

describe('ArtworkAddComponent', () => {
  let component: ArtworkAddComponent;
  let fixture: ComponentFixture<ArtworkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
