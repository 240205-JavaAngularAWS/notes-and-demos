import { Component } from '@angular/core';
import { Observable, Subject, Subscriber, from } from 'rxjs';

@Component({
  selector: 'app-observable-practice',
  templateUrl: './observable-practice.component.html',
  styleUrl: './observable-practice.component.css'
})
export class ObservablePracticeComponent {


  observablePractice(){
    
    const observable = new Observable((subscriber) => {
      // Inside of here I can define a stream of values that will emulate what happens when we get an observable returned from a method
      // This is very important for our http requests later down the line
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      // So here we've defined a stream of values, namely 1, 2, 3 and the subscriber of the observable will do something every time it receives the value from the observable

      // Let's try adding in an asynchronous values
      setTimeout(() =>{
        subscriber.next(4);
        subscriber.complete();
        subscriber.next(5);
      }, 3000)
    });

    console.log("Just before subscribing")
    observable.subscribe({
      // next will be called EVERY time it receives a value from the stream
      next(x){
        console.log(`received value ${x}`)
      },
      error(err){
        console.log(`an error occured: ${err}`)
      },
      complete(){
        console.log("completed")
      }
    })
    console.log("Just after subscribing")

    // Let's add a new subscriber to the observable
    observable.subscribe({
      // next will be called EVERY time it receives a value from the stream
      next(x){
        console.log(`2nd observer received value ${x}`)
      },
      error(err){
        console.log(`2nd observer had an error occured: ${err}`)
      },
      complete(){
        console.log("2nd observer completed")
      }
    })

  }



  subjectPractice(){
    // Here we'll create a new subject and do some stuff with it
    // Subjects are OBSERVERS meaning they watch observables
    const subject = new Subject<number>();

    // Now we can create as many subscribers as we want and we'll expect them to see everything at the same time
    subject.subscribe({
      next(y){
        console.log(`1st observser received: ${y}`)
      }
    })

    subject.subscribe({
      next(y){
        console.log(`2nd observser received: ${y}`)
      }
    })

    // If we want to create an observable from just a stream of literal values we can use the from() method from rxjs
    const observable = from([1,2,3])

    // We need to subscribe using the subject
    observable.subscribe(subject)

    // Why do we need this middleman? The subject NOTIFIES all subscribers of a new value at the same time acheiving multicast messages whereas a regular observer is unicast
  }
}
