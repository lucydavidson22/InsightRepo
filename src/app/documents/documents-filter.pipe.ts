import { Pipe, PipeTransform } from '@angular/core';
import { Document } from './document.model';

@Pipe({
  name: 'documentsFilter'
})
export class DocumentsFilterPipe implements PipeTransform {
  transform(documents: Document[], term: string) {
    if (!term || term.length === 0) {
      return documents; // Return original documents when no search term is entered
    }

    let filteredDocuments: Document[] =[];
    if (term && term.length > 0) {
      filteredDocuments = documents.filter(
        (document: Document) => {
          const name = document.name.toLowerCase();
          const category = document.category.toLowerCase();
          const date = document.date.toLowerCase();
          const tangibleItems = document.tangibleItems.toLowerCase();
          const clientSponsor = document.clientSponsor.toLowerCase();
          const profStartedBy = document.profileStartedBy.toLowerCase();
          const termLowerCase = term.toLowerCase();
          return name.includes(termLowerCase) || category.includes(termLowerCase) || date.includes(termLowerCase) || tangibleItems.includes(termLowerCase) || clientSponsor.includes(termLowerCase) || profStartedBy.includes(termLowerCase);
        }
      );
    }
    if (filteredDocuments.length === 0){
      const noDocumentsFound: Document = {
        name: "No documents found",
        id: '',
        url: '',
        date: '',
        clientSponsor:'',
        location: '',
        publication: '',
        category:'',
        tangibleItems:'',
        description: '',
        profileStartedBy: '',
        profileStatus: ''
      };
      return [noDocumentsFound];
      // return [{ message: "No documents found"}];
      // return documents;
    }
    return filteredDocuments;
  }

}
