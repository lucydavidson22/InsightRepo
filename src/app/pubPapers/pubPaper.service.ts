import { Injectable, EventEmitter } from '@angular/core';
import { PubPaper } from './pubPaper.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PubPaperService {
  pubPaperListChangedEvent = new Subject<PubPaper[]>();
  pubPaperSelectedEvent = new EventEmitter<PubPaper>();
  pubPaperChangedEvent = new EventEmitter<PubPaper[]>();
  private pubPapers: PubPaper[] = [];
  maxPubPaperId: number;

  constructor(private http: HttpClient) {
    this.getPubPapersHttp();
   }

   getPubPapers(){
     return this.pubPapers.slice();
   }

   getPubPapersHttp(){
     console.log('pubPapershttp entered');
    return this.http
     .get<PubPaper[]>('http://localhost:3000/pubPapers')
     .subscribe(
       //success method
       (pubPapers:PubPaper[]) => {
         console.log('pubPapers', pubPapers);
         this.pubPapers = pubPapers;
         this.maxPubPaperId = this.getMaxId();
         pubPapers.sort((a, b) => {
           if(a.id > b.id){ return 1; }
           if(a.id < b.id){ return -1; }
           else { return 0; }
          });
            let pubPapersListClone = this.pubPapers.slice();
            this.pubPaperListChangedEvent.next(pubPapersListClone);
       }
       //error method
       ,(error: any)=> {
         console.log(error.message)
       }
     );
   }

   getPubPaper(id:string){
    for(let pubPaper of this.pubPapers){
      if(id == pubPaper.id){
        return pubPaper;
      }
    }
    return null!;
   }

  getMaxId(): number {
    // let maxId = 0;
    // for(let pubPaper of this.pubPapers){
    //     if(parseInt(pubPaper.id, 10) > maxId){
    //       maxId = parseInt(pubPaper.id, 10);
    //     }
    // }
    // return maxId;
      let maxId = 0;
      for (let pubPaper of this.pubPapers) {
        const id = parseInt(pubPaper.id, 10);
        if (!isNaN(id) && id > maxId) { // Add check for valid number
          maxId = id;
        }
      }
      return maxId;
  }


  addPubPaper(pubPaper: PubPaper) {
    if (!pubPaper) {
      return;
    }
    console.log("Add another pubPaper");

    // make sure id of the new PubPaper is empty
    pubPaper.id = null;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, pubPaper: PubPaper }>('http://localhost:3000/pubPapers',
      pubPaper,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new pubPaper to pubPapers
          console.log('Push new data');
          this.pubPapers.push(responseData.pubPaper);
          this.pubPaperListChangedEvent.next(this.pubPapers.slice());
          // this.sortAndSend();
        }
      );

  }

  updatePubPaper(originalPubPaper: PubPaper, newPubPaper: PubPaper) {
    if (!originalPubPaper || !newPubPaper) {
      return;
    }
    const pos = this.pubPapers.findIndex(d => d.id === originalPubPaper.id);
    if (pos < 0) {
      return;
    }
    // set the id of the new PubPaper to the id of the old PubPaper
    newPubPaper.id = originalPubPaper.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/pubPapers/' + originalPubPaper.id,
      newPubPaper, { headers: headers })
      .subscribe(
        () => {
          this.pubPapers[pos] = newPubPaper;
          this.pubPaperListChangedEvent.next(this.pubPapers.slice());
        }
      );

  }

  deletePubPaper(pubPaper: PubPaper) {
    if (!pubPaper) {
      return;
    }

    const pos = this.pubPapers.findIndex(d => d.id === pubPaper.id);
    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/pubPapers/' + pubPaper.id)
      .subscribe(
        () => {
          this.pubPapers.splice(pos, 1);
          this.pubPaperListChangedEvent.next(this.pubPapers.slice());
        }
      );
  }

}
