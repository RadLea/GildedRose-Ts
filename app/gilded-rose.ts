export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case "Aged Brie":
                    if (this.items[i].sellIn > 0) {
                        this.items[i].quality++;
                    } else {
                        this.items[i].quality += 2;
                    }
                    this.items[i].sellIn--;
                    break;

                case "Backstage passes to a TAFKAL80ETC concert":
                    if (this.items[i].sellIn <= 0) {
                        this.items[i].quality = 0;
                    } else if (this.items[i].sellIn <= 5) {
                        this.items[i].quality += 3;
                    } else if (this.items[i].sellIn <= 10) {
                        this.items[i].quality += 2;
                    } else {
                        this.items[i].quality++;
                    }
                    this.items[i].sellIn--;
                    break;

                case "Sulfuras, Hand of Ragnaros":
                    // Nothing to see here
                    break;

                case "Conjured Mana Cake":
                    if (this.items[i].sellIn >= 0) {
                        this.items[i].quality -= 2;
                    } else {
                        this.items[i].quality -= 4;
                    }
                    this.items[i].sellIn--;
                    break;

                default:
                    if (this.items[i].sellIn >= 0) {
                        this.items[i].quality--;
                    } else {
                        this.items[i].quality -= 2;
                    }
                    this.items[i].sellIn--;
                    break;
            }
            if (this.items[i].quality > 50) {
                this.items[i].quality = 50;
            }
        }

        return this.items;
    }
}