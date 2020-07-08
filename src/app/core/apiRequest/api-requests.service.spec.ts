import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from './../../../environments/environment';

import { ApiRequestsService } from './api-requests.service';

fdescribe('ApiRequestsService', () => {
  let service: ApiRequestsService;
  let injector: TestBed;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
    	providers: [ApiRequestsService],
    	imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiRequestsService);
  });

  beforeEach(() => {
  	injector = getTestBed();
  	service = TestBed.get(ApiRequestsService);
  	httpMock = injector.get(HttpTestingController);
  });

  afterAll(()=> {
  	// Cleaning variables
  	injector = null;
  	service = null;
  	httpMock = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET', ()=> {
  	it('Should execute getQuery', ()=> {
  		const result = 'testing';

  		service.getQuery('categories').subscribe(response => {
  			expect(response).toBe(result);
  		});

  		const req = httpMock.expectOne(environment.URL_API + '/categories');
  		expect(req.request.method).toBe('GET');
  		req.flush(result);
  	});
  });

});
