import { Injectable } from '@angular/core';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  get localStorage(): Storage {
    return getLocalStorage();
  }

  constructor() { }
}
