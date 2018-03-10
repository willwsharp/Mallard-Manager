import { Injectable } from '@angular/core';

/**
 * THIS CLASS IS TEMPORARY.  Until we get Firebase up and incorporated into our app, we don't have
 * a way to simulate UUIDs.  This service provides that.  When we get Firebase incorporated into
 * the app, this service will no longer be needed.
 * @author willwsharp
 */
@Injectable()
export class UUIDService {

    public generateUUID(): string {
        return this.uuidv4();
    }

    // Private functions

    private uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          // tslint:disable-next-line:no-bitwise
          const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}
