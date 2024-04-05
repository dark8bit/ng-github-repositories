import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesLayoutComponent } from './repositories-layout.component';

describe('RepositoriesLayoutComponent', () => {
  let component: RepositoriesLayoutComponent;
  let fixture: ComponentFixture<RepositoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
