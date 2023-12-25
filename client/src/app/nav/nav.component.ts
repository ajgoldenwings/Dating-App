import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, 
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  login() {

    this.accountService.login(this.model).subscribe({
      next: (v) => { console.log("next", v); this.router.navigateByUrl('/members'); },
      //error: (error) => { console.error("error", error); this.toastrService.error(error.error); },
      complete: () => console.info('complete') });
    // this.accountService.login(this.model).subscribe(response => {
    //   this.router.navigateByUrl('/members');
    // }, error => {
    //   console.log(error);
    //   this.toastr.error(error.error);
    // })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}