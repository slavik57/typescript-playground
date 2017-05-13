declare type EventName = 'click' | 'hover' | 'mouse-enter';
declare function on(eventName: EventName, callback: Function): void;
