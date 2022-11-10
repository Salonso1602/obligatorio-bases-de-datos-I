import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosViewComponent } from './permisos-view.component';

describe('PermisosViewComponent', () => {
  let component: PermisosViewComponent;
  let fixture: ComponentFixture<PermisosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
