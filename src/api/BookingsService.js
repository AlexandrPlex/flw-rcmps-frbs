// @flow
import { db } from './firebase';

export type IBooking = {
  id?: string,
  name: string,
  email: string,
  date: string,
  timestamp: number,
};

class BookingsService {
  ref: string;

  constructor() {
    this.ref = 'bookings';
  }

  get bookings(): Promise<IBooking[]> {
    console.log('get bookings');
    return new Promise((resolve, reject) => {
      let items = [];
      const ref = db.ref(this.ref);
      ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const item = { id: childKey, ...childData };
          items.push(item);
        });
        resolve(items);
      });
    });
  }

  book(body: IBooking): Promise<void> {
    return new Promise((resolve, reject) => {
      db.ref(`${this.ref}/`).push(body, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default new BookingsService();
