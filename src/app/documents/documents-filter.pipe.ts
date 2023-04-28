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
          const name = document.name ? document.name.toLowerCase(): '';
          const date = document.date ? document.date.toLowerCase(): '';
          const clientSponsor = document.clientSponsor ? document.clientSponsor.toLowerCase(): '';
          const location = document.location ? document.location.toLowerCase(): '';
          const publication = document.publication ? document.publication.toLowerCase() : '';
          const category = document.category ? document.category.toLowerCase(): '';
          const tangibleItems = document.tangibleItems ? document.tangibleItems.toLowerCase(): '';
          const description = document.description ? document.description.toLowerCase() : '';
          const profStartedBy = document.profileStartedBy ? document.profileStartedBy.toLowerCase(): '';
          const profileStatus = document.profileStatus ? document.profileStatus.toLowerCase() : '';
          const termLowerCase = term.toLowerCase();
          return name.includes(termLowerCase) || 
                 date.includes(termLowerCase) || 
                 clientSponsor.includes(termLowerCase) || 
                 location.includes(termLowerCase) ||
                 publication.includes(termLowerCase) ||
                 category.includes(termLowerCase) || 
                 tangibleItems.includes(termLowerCase) || 
                 description.includes(termLowerCase) ||
                 profStartedBy.includes(termLowerCase) ||
                 profileStatus.includes(termLowerCase);
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