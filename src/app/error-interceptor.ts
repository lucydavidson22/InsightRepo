import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent } from "./error/error.component";
    

@Injectable()                                                       // <-- this is for injecting a service
export class ErrorInterceptor implements HttpInterceptor {          
    constructor(public dialog: MatDialog) {}                       // <-- injecting the dialog service here            

    intercept(req: HttpRequest<any>, next: HttpHandler) {        
        return next.handle(req).pipe(
            catchError((error : HttpErrorResponse) => {             //<-- catchError is the operator that allows us to handle errors emitted in this stream
                let errorMessage = "An unknown error occurred!";
                if(error.error.message){
                    errorMessage = error.error.message
                }
                this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
                return throwError(error);
            })
        );
    }
}
