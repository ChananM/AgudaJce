import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  public LOCAL: string = 'local';
  public SESSION: string = 'session';

  constructor(private afAuth: AngularFireAuth) {
    
  }

  isSignedIn(): boolean{
    return this.afAuth.auth.currentUser != null;
  }

  signIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.afAuth.auth.signOut();
  }

  resetPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  setPersistence(remember: boolean){
    return this.afAuth.auth.setPersistence(remember ? this.LOCAL : this.SESSION);
  }
}
