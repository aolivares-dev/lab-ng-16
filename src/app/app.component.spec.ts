import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('fibonacci para los primeros elementos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance;
    expect(compiled.getFibonacciSequence(0)).toEqual(0);
  });

  it('fibonacci para lel elemento 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance;
    expect(compiled.getFibonacciSequence(2)).toEqual(1);
  });

  it('fibonacci para lel elemento 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance;
    expect(compiled.getFibonacciSequence(5)).toEqual(5);
  });

  it('fibonacci para lel elemento 20', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance;
    expect(compiled.getFibonacciSequence(20)).toEqual(6765);
  });
});
