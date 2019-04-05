export declare type Item = any;
export declare type Comparator<Item> = (a: Item, b: Item) => -1 | 0 | 1;

export default class TinyQueue<Item> {
  public data : Item[];
  public length : number;
  constructor (items? : Item[], compare? : Comparator<Item>);
  peek () : Item;
  pop () : Item;
  push (item: Item) : void;
}
