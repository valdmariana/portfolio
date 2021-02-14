import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhatIDoComponent } from './what-i-do.component';

describe('WhatIDoComponent', () => {
  let component: WhatIDoComponent;
  let fixture: ComponentFixture<WhatIDoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
