import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRowPage } from './create-row.page';

describe('CreateRowPage', () => {
  let component: CreateRowPage;
  let fixture: ComponentFixture<CreateRowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
