import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCompComponent } from './title-comp.component';

describe('TitleCompComponent', () => {
  let component: TitleCompComponent;
  let fixture: ComponentFixture<TitleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
