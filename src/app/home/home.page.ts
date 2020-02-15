import {HomeService} from '../services/home.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    results: Observable<any>;

    constructor(private homeService: HomeService) {  }

    ngOnInit() {
        this.results = this.homeService.searchFilms();
    }
}
