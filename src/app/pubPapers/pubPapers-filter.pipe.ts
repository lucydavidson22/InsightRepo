import { Pipe, PipeTransform } from '@angular/core';
import { PubPaper } from './pubPaper.model';

@Pipe({
  name: 'pubPapersFilter'
})
export class PubPapersFilterPipe implements PipeTransform {
  transform(pubPapers: PubPaper[], term: string) {
    if (!term || term.length === 0) {
      return pubPapers; // Return original pubPapers when no search term is entered
    }

    let filteredPubPapers: PubPaper[] =[];
    if (term && term.length > 0) {
      filteredPubPapers = pubPapers.filter(
        (pubPaper: PubPaper) => {
          const name = pubPaper.name.toLowerCase();
          const year = pubPaper.year.toLowerCase();
          const pub = pubPaper.pub.toLowerCase();
          const cat = pubPaper.cat.toLowerCase();
          const projDesc = pubPaper.projDesc.toLowerCase();
          const profPage = pubPaper.profPage.toLowerCase();
          const topic = pubPaper.topic.toLowerCase();
          const termLowerCase = term.toLowerCase();
          return name.includes(termLowerCase) || year.includes(termLowerCase) || pub.includes(termLowerCase) || cat.includes(termLowerCase) || projDesc.includes(termLowerCase) || profPage.includes(termLowerCase) || topic.includes(termLowerCase);
        }
      );
    }
    if (filteredPubPapers.length === 0){
      const noPubPapersFound: PubPaper = {
        name: "No pubPapers found",
        id: '',
        year:'',
        pub:'',
        cat:'',
        projDesc:'',
        profPage:'',
        topic:'',
        citation:''
      };
      return [noPubPapersFound];
      // return [{ message: "No pubPapers found"}];
      // return pubPapers;
    }
    return filteredPubPapers;
  }

}
