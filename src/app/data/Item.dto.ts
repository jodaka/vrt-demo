import { getRandomInt } from '../utilities/randomNumber';

export enum FlagIcons {
  flower = '⚘',
  heart = '❤',
  sun = '☀',
  flash = '⌁'
}

export const flags = ['flower' , 'heart' , 'sun' , 'flash'];
export type Flag = 'flower' | 'heart' | 'sun' | 'flash';

export class Item {
  constructor (
    public name: string,
    public flags: Set<Flag>,
    public isSelected: boolean
  ) {}

  public static buildRandom(itemName: string): Item {

    const itemFlags: Set<Flag> = new Set();

    const flagsCount = getRandomInt(0, flags.length);
    for (let i = 0; i < flagsCount; i++) {
      itemFlags.add(flags[getRandomInt(0, flags.length - 1)] as Flag);
    }

    return new Item(itemName, itemFlags, false);
  }

  getFlagsIcons(): string {
    const result = [];
    this.flags.forEach((flag: string) => {
      result.push(FlagIcons[flag]);
    });
    return result.join(' ');
  }
}
