import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVpComponent } from './create-vp.component';

describe('CreateVpComponent', () => {
  let component: CreateVpComponent;
  let fixture: ComponentFixture<CreateVpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
