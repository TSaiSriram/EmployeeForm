import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestcaseComponent } from './testcase.component';
fdescribe('testcase component tests',() => {
  it('is testcase component defined',() => {
   let Component: TestcaseComponent;
   let fixture: ComponentFixture<TestcaseComponent>;
   
   TestBed.configureTestingModule({
     declarations: [ TestcaseComponent ]
   });
   fixture = TestBed.createComponent(TestcaseComponent);
   Component = fixture.componentInstance;

   expect(Component).toBeDefined();
  })
})