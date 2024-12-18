/**
 * Close Screen Action Event base class -test
 */
export const CloseScreenEventName = 'lightning__actionsclosescreen';

export class CloseActionScreenEvent extends CustomEvent {
    constructor() {
        super(CloseScreenEventName, { bubbles: false, composed: false });
    }
}
