import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Normal Item', () => {
        const gildedRose = new GildedRose([ new Item('burger', 25, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('burger', 24, 14));
    });

    it('Sulfuras', () => {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 25, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Sulfuras, Hand of Ragnaros', 25, 15));
    });

    it('Aged Brie', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 25, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Aged Brie', 24, 16));
    });

    it('Backstage Pass - normal', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 25, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 24, 16));
    });

    it('Backstage Pass - 10 days', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 17));
    });

    it('Backstage Pass - 5 days', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 18));
    });

    it('Backstage Pass - 0 days', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0));
    });

    it('sellIn sub zero - quality decreases twice as fast', () => {
        const gildedRose = new GildedRose([ new Item('random item', -2, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('random item', -3, 13));
    });

    it('Aged Brie sub zero sellIn', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -2, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('Aged Brie', -3, 17));
    });

});
