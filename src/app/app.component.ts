import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    includeLetters = false;
    includeNumbers = false;
    includeSymbols = false;
    password = "";

    onButtonClick() {
        console.log(this.includeSymbols);
        this.password = "MY PASSWORD!!!";
    }

    onChangeUseLetters() {
        this.includeLetters = !this.includeLetters;
    }

    onChangeUseNumber() {
        this.includeNumbers = !this.includeNumbers;
    }

    onChangeUseSymbols() {
        this.includeSymbols = !this.includeSymbols;
    }
}
