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
    length = 0;
    password = "";

    onChangeUseLetters() {
        this.includeLetters = !this.includeLetters;
    }

    onChangeUseNumbers() {
        this.includeNumbers = !this.includeNumbers;
    }

    onChangeUseSymbols() {
        this.includeSymbols = !this.includeSymbols;
    }

    onChangeLength(event: Event) {
        const target = event.target as HTMLInputElement;
        const parsedValue = parseInt(target.value);

        if (!isNaN(parsedValue)) {
            this.length = parsedValue;
        }
    }

    onButtonClick() {
        const numbers = '1234567890';
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const symbols = '!@#$%^&*()';

        let validChars = '';
        if (this.includeLetters) {
            validChars += letters;
        }

        if (this.includeNumbers) {
            validChars += numbers;
        }

        if (this.includeSymbols) {
            validChars += symbols;
        }

        let generatedPassword = '';
        for (let i = 0; i < this.length; i++) {
            const index = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[index];
        }
        this.password = generatedPassword;
    }
}
