import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI2 } from '../models/task.interface';



@Injectable({
  providedIn: 'root'
})
export class AntonimoService {

  private todosCollection: AngularFirestoreCollection<TaskI2>;
  private todos: Observable<TaskI2[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<TaskI2>('antonimos');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    
    );
    console.log(this.todos);
    console.log("Hola putita");
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<TaskI2>(id).valueChanges();
  }

  updateTodo(todo: TaskI2, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: TaskI2) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}
