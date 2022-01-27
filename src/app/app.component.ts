import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    includeSymbols = true;
    includeNumbers = true;
    includeLetters = true;
    includeUpperCaseLetters = false;
    excludeAmbiguousChar = true;
    length = 15;
    password = "";

    onChangeUseSymbols() {
        this.includeSymbols = !this.includeSymbols;
    }

    onChangeUseNumbers() {
        this.includeNumbers = !this.includeNumbers;
    }

    onChangeUseLetters() {
        this.includeLetters = !this.includeLetters;
    }

    onChangeUseUppercaseLetters() {
        this.includeUpperCaseLetters = !this.includeUpperCaseLetters;
    }

    onChangeAmbiguousChar() {
        this.excludeAmbiguousChar = !this.excludeAmbiguousChar;
    }

    onChangeLength(event: Event) {
        const target = event.target as HTMLInputElement;
        const parsedValue = parseInt(target.value);

        if (!isNaN(parsedValue)) {
            this.length = parsedValue;
        }
    }

    onButtonClick() {
        const symbols = '!@#$%^&*+=-_';
        const numbers = '1234567890';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const ambiguousChar = '{}[]()/\\\'"`~,;:.<>'

        let validChars = '';
        if (this.includeSymbols) {
            validChars += symbols;
        }

        if (this.includeNumbers) {
            validChars += numbers;
        }    

        if (this.includeLetters) {
            validChars += letters;
        }    

        if (this.includeUpperCaseLetters) {
            validChars += upperCaseLetter;
        }

        if (this.excludeAmbiguousChar) {
            validChars += ambiguousChar;
        }


        let generatedPassword = '';
        for (let i = 0; i < this.length; i++) {
            const index = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[index];
        }
        this.password = generatedPassword;
    }
}
