import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBranchComponent } from './node-branch.component';

describe('NodeBranchComponent', () => {
  let component: NodeBranchComponent;
  let fixture: ComponentFixture<NodeBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
