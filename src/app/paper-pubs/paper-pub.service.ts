import { Injectable, EventEmitter } from '@angular/core';
import { PaperPub } from './paper-pub.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaperPubService {
  paperPubListChangedEvent = new Subject<PaperPub[]>();
  paperPubSelectedEvent = new EventEmitter<PaperPub>();
  paperPubChangedEvent = new EventEmitter<PaperPub[]>();
  private paperPubs: PaperPub[] = [];
  maxPaperPubId: number;

  constructor(private http: HttpClient) {
    // this.maxPaperPubId = this.getMaxId();
    this.getPaperPubsHttp();
   }

   getPaperPubs(){
     return this.paperPubs.slice();
   }

   getPaperPubsHttp(){
     console.log('paperPubshttp entered');
    return this.http
     .get<PaperPub[]>('http://localhost:3000/paperPubs')
     .subscribe(
       //success method
       (paperPubs:PaperPub[]) => {
         console.log('paperPubs', paperPubs);
         this.paperPubs = paperPubs;    //Assign the array of paperPubs received to the paperPubs property.
         this.maxPaperPubId = this.getMaxId();  //get the maximum value used for the id property in the paperPub list, assign the value returned to the maxPaperPubId
         paperPubs.sort((a, b) => {    //Sort the list of paperPubs by name using the sort() JavaScript array method.
           if(a.id > b.id){ return 1; }
           if(a.id < b.id){ return -1; }
           else { return 0; }
          });
            // this.paperPubChangedEvent.emit(this.paperPubs.slice());   //emit the next paperPub list change event
            let paperPubsListClone = this.paperPubs.slice();
            this.paperPubListChangedEvent.next(paperPubsListClone);
       }
       //error method
       ,(error: any)=> {
         console.log(error.message)
       }
     );
   }

   getPaperPub(id:string){
    for(let paperPub of this.paperPubs){
      if(id == paperPub.id){
        return paperPub;
      }
    }
    return null!;
   }

  getMaxId(): number {
    let maxId = 0;
    for(let paperPub of this.paperPubs){
        if(parseInt(paperPub.id, 10) > maxId){
          maxId = parseInt(paperPub.id, 10);
        }
    }
    return maxId;
  }


  addPaperPub(paperPub: PaperPub) {
    if (!paperPub) {
      return;
    }
    console.log("Add another paperPub");

    // make sure id of the new PaperPub is empty
    paperPub.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, paperPub: PaperPub }>('http://localhost:3000/paperPubs',
      paperPub,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new paperPub to paperPubs
          console.log('Push new data');
          this.paperPubs.push(responseData.paperPub);
          this.paperPubListChangedEvent.next(this.paperPubs.slice());
          // this.sortAndSend();
        }
      );

  }

  updatePaperPub(originalPaperPub: PaperPub, newPaperPub: PaperPub) {
    if (!originalPaperPub || !newPaperPub) {
      return;
    }
    const pos = this.paperPubs.findIndex(d => d.id === originalPaperPub.id);
    if (pos < 0) {
      return;
    }
    // set the id of the new PaperPub to the id of the old PaperPub
    newPaperPub.id = originalPaperPub.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/paperPubs/' + originalPaperPub.id,
      newPaperPub, { headers: headers })
      .subscribe(
        () => {
          this.paperPubs[pos] = newPaperPub;
          this.paperPubListChangedEvent.next(this.paperPubs.slice());
          // this.sortAndSend();
        }
      );

  }

  deletePaperPub(paperPub: PaperPub) {
    if (!paperPub) {
      return;
    }

    const pos = this.paperPubs.findIndex(d => d.id === paperPub.id);
    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/paperPubs/' + paperPub.id)
      .subscribe(
        () => {
          this.paperPubs.splice(pos, 1);
          this.paperPubListChangedEvent.next(this.paperPubs.slice());
          // this.sortAndSend();
        }
      );
  }

}
