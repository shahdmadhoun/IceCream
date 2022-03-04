import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePhotosComponent } from './some-photos.component';

describe('SomePhotosComponent', () => {
  let component: SomePhotosComponent;
  let fixture: ComponentFixture<SomePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
