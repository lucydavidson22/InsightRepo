import { Injectable, EventEmitter } from '@angular/core';
import { ProjChoice } from './projChoice.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProjChoiceService {
  projChoiceListChangedEvent = new Subject<ProjChoice[]>();
  projChoiceSelectedEvent = new EventEmitter<ProjChoice>();
  projChoiceChangedEvent = new EventEmitter<ProjChoice[]>();
  private projChoices: ProjChoice[] = [];
  maxProjChoiceId: number;

  constructor(private http: HttpClient) {
    this.getProjChoicesHttp();
   }

   getProjChoices(){
     return this.projChoices.slice();
   }

   getProjChoicesHttp(){
     console.log('projChoiceshttp entered');
    return this.http
     .get<ProjChoice[]>('http://localhost:3000/projChoices')
     .subscribe(
       //success method
       (projChoices:ProjChoice[]) => {
         console.log('projChoices', projChoices);
         this.projChoices = projChoices;
         this.maxProjChoiceId = this.getMaxId(); 
         projChoices.sort((a, b) => { 
           if(a.status < b.status){ return 1; }
           if(a.status > b.status){ return -1; }
           else { return 0; }
          });
            let projChoicesListClone = this.projChoices.slice();
            this.projChoiceListChangedEvent.next(projChoicesListClone);
       }
       //error method
       ,(error: any)=> {
         console.log(error.message)
       }
     );
   }

   getProjChoice(id:string){
    for(let projChoice of this.projChoices){
      if(id == projChoice.id){
        return projChoice;
      }
    }
    return null!;
   }

  getMaxId(): number {
    let maxId = 0;
    for(let projChoice of this.projChoices){
        if(parseInt(projChoice.id, 10) > maxId){
          maxId = parseInt(projChoice.id, 10);
        }
    }
    return maxId;
  }


  addProjChoice(projChoice: ProjChoice) {
    if (!projChoice) {
      return;
    }
    console.log("Add another projChoice");

    // make sure id of the new ProjChoice is empty
    projChoice.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, projChoice: ProjChoice }>('http://localhost:3000/projChoices',
      projChoice,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new projChoice to projChoices
          console.log('Push new data');
          this.projChoices.push(responseData.projChoice);
          this.projChoiceListChangedEvent.next(this.projChoices.slice());
        }
      );

  }

  updateProjChoice(originalProjChoice: ProjChoice, newProjChoice: ProjChoice) {
    if (!originalProjChoice || !newProjChoice) {
      return;
    }
    const pos = this.projChoices.findIndex(d => d.id === originalProjChoice.id);
    if (pos < 0) {
      return;
    }
    // set the id of the new ProjChoice to the id of the old ProjChoice
    newProjChoice.id = originalProjChoice.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/projChoices/' + originalProjChoice.id,
      newProjChoice, { headers: headers })
      .subscribe(
        () => {
          this.projChoices[pos] = newProjChoice;
          this.projChoiceListChangedEvent.next(this.projChoices.slice());
        }
      );

  }

  deleteProjChoice(projChoice: ProjChoice) {
    if (!projChoice) {
      return;
    }

    const pos = this.projChoices.findIndex(d => d.id === projChoice.id);
    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/projChoices/' + projChoice.id)
      .subscribe(
        () => {
          this.projChoices.splice(pos, 1);
          this.projChoiceListChangedEvent.next(this.projChoices.slice());
          // this.sortAndSend();
        }
      );
  }

}