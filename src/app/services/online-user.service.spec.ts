import { TestBed } from '@angular/core/testing';

import { OnlineUserService } from './online-user.service';

describe('OnlineUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineUserService = TestBed.get(OnlineUserService);
    expect(service).toBeTruthy();
  });
});
