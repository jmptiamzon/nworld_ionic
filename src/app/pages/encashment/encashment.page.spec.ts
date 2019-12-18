import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncashmentPage } from './encashment.page';

describe('EncashmentPage', () => {
  let component: EncashmentPage;
  let fixture: ComponentFixture<EncashmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncashmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncashmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
