import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component to be used as dialog for displaying error messages.
 */
@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
    /**
     * Error message to be displayed.
     */
    readonly errorMessage: string;

    /**
     * Initializes the message to be displayed with the error message/name/title based on which of the named values exists
     * (error itself is the fallback).
     *
     * @param error Injected error data to be displayed.
     */
    constructor(@Inject(MAT_DIALOG_DATA) error: any) {
        this.errorMessage = '';

        for (const e of [error.title, error.name, error.message, error.error]) {
            if (e && typeof e === 'string' && e.trim()) {
                this.errorMessage += e + '\n';
            }
        }

        if (!this.errorMessage.trim()) this.errorMessage = error;
    }
}
