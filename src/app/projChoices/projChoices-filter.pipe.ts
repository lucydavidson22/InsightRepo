import { Pipe, PipeTransform } from '@angular/core';
import { ProjChoice } from './projChoice.model';

@Pipe({
  name: 'projChoicesFilter'
})
export class ProjChoicesFilterPipe implements PipeTransform {
  transform(projChoices: ProjChoice[], term: string) {
    if (!term || term.length === 0) {
      return projChoices; // Return original projChoices when no search term is entered
    }

    let filteredProjChoices: ProjChoice[] =[];
    if (term && term.length > 0) {
      filteredProjChoices = projChoices.filter(
        (projChoice: ProjChoice) => {
          const name = projChoice.name.toLowerCase();
          const termLowerCase = term.toLowerCase();
          return name.includes(termLowerCase) ;
        }
      );
    }
    if (filteredProjChoices.length === 0){
      const noProjChoicesFound: ProjChoice = {
        name: "No projChoices found",
        id: '',
        topTwenty: false
      };
      return [noProjChoicesFound];
      // return [{ message: "No projChoices found"}];
      // return projChoices;
    }
    return filteredProjChoices;
  }

}
