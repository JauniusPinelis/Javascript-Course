import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopItemComponent } from './create-shop-item.component';

describe('CreateShopItemComponent', () => {
  let component: CreateShopItemComponent;
  let fixture: ComponentFixture<CreateShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShopItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
