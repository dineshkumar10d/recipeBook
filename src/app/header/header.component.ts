import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    collapsed:boolean = true;
    isAuthenticated: boolean = false;
    private userSub: Subscription;

    constructor(private dataStorage: DataStorageService, 
        private authService: AuthService){}
    ngOnInit(){
       this.userSub = this.authService.user.subscribe(user=>{
           this.isAuthenticated = !!user;
           console.log(!user);
           console.log(!!user);
       });
    }
    onSaveData(){
        this.dataStorage.storeRecipes();
    }
    
    onFetchData(){
        this.dataStorage.fetchRecipes();
    }
    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}