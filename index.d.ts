export declare type Comparator<T> = (a: T, b: T) => number;
export default class TinyQueue<T> {
    private data;
    private compare;
    length: number;
    constructor(data?: T[], compare?: Comparator<T>);
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    private _up;
    private _down;
}
