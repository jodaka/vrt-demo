
export const flags = ['flower' , 'heart' , 'sun' , 'flash'];
export type Flag = 'flower' | 'heart' | 'sun' | 'flash';
enum FlagIcons {
  flower = '❁',
  heart = '❤',
  sun = '☀',
  flash = '⚡'
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Item {
  constructor (
    public name: string,
    public flags: Set<Flag>,
    public isSelected: boolean
  ) {}

  public static buildRandom(nameCounter: number): Item {

    const itemName = `Item ${nameCounter}`;
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
