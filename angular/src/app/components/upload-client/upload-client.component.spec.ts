import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadClientComponent } from './upload-client.component';

describe('UploadClientComponent', () => {
  let component: UploadClientComponent;
  let fixture: ComponentFixture<UploadClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
