import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'invalid-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />
        </div>
        <app-code [code]="code" selector="input-text-invalid-demo"></app-code>
    </section>`
})
export class InvalidDoc {
    value: string | undefined;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />`,

        html: `
<div class="card flex justify-content-center">
    <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-invalid-demo',
    templateUrl: './input-text-invalid-demo.html'
})
export class InputTextInvalidDemo {
    value: string | undefined;
}`
    };
}
