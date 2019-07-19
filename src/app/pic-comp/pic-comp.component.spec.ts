import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicCompComponent } from './pic-comp.component';

describe('PicCompComponent', () => {
  let component: PicCompComponent;
  let fixture: ComponentFixture<PicCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
