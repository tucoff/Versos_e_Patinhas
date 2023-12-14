import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVpComponent } from './list-vp.component';

describe('ListVpComponent', () => {
  let component: ListVpComponent;
  let fixture: ComponentFixture<ListVpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
