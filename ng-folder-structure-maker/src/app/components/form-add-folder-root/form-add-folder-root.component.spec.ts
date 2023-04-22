import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddFolderRootComponent } from './form-add-folder-root.component';

describe('FormAddFolderRootComponent', () => {
  let component: FormAddFolderRootComponent;
  let fixture: ComponentFixture<FormAddFolderRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddFolderRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddFolderRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
