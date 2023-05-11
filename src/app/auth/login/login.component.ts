import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
    isLoading = false;
    private authStatusSub: Subscription;
    // showPwd = false; // <-- added variable for password visibility
    showPwd = false; // <-- changed variable name to match HTML

    constructor(public authService: AuthService){}
    
    ngOnInit(): void {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
            authStatus => {
                this.isLoading = false;
            }
            );
    }
        
    onLogin(form: NgForm){
        if (form.invalid){
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    }

    togglePasswordVisibility() {
        this.showPwd = !this.showPwd;
    }
      
        
    ngOnDestroy(): void {
        this.authStatusSub.unsubscribe();
      }    

}