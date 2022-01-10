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

    onChangeUseNumber() {
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
        console.log(`
            About to generate a password with the following:
            Includes letters: ${this.includeLetters}
            Includes numbers: ${this.includeNumbers}
            Includes symbols: ${this.includeSymbols}
            Length: ${this.length}
        `);
        this.password = "MY PASSWORD!!!";
    }
}
