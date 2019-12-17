import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Palabra } from '../Models/palabra.interface';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  private todosCollection: AngularFirestoreCollection<Palabra>;
  private todos: Observable<Palabra[]>;

  constructor(private db: AngularFirestore) {
  }
  getTodos() {
    this.todosCollection = this.db.collection<Palabra>('palabras');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<Palabra>(id).valueChanges();
  }

  updateTodo(todo: Palabra, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Palabra) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}
