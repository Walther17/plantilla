import { TestBed } from '@angular/core/testing';

import { ProdInterceptorService } from './prod-interceptor.service';

describe('ProductoInterceptorService', () => {
  let service: ProdInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
