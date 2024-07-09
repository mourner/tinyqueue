export declare type Comparator<T> = (a: T, b: T) => number;
export declare type Criteria<T> = (val: T) => boolean;

export default class TinyQueue<T> {
  public data : T[];
  public length : number;
  constructor (items? : T[], compare? : Comparator<T>);
  peek () : T | undefined;
  pop () : T | undefined;
  push (item: T) : void;
  update (newItem: T, criteria? : Criteria<T>);
}
