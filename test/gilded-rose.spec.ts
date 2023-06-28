import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose - positive sellIn',  () => {

    it('Normal Item decrease by one', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('burger', 25, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('burger', 24, 14));
    });

    it('Sulfuras not decreasing', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 25, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Sulfuras, Hand of Ragnaros', 25, 15));
    });

    it('Aged Brie increase quality', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 25, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Aged Brie', 24, 16));
    });

    it('Backstage Pass - normal -> increase quality', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 25, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 24, 16));
    });

    it('Backstage Pass - 10 days -> increase quality by two', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 17));
    });

    it('Backstage Pass - 5 days -> increase quality by three', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 18));
    });

    it('Backstage Pass - 0 days -> quality falls to zero', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0));
    });

    it('quality over 50', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', 43, 50) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Aged Brie', 42, 50));
    });

    it('conjured', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 43, 24) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Conjured Mana Cake', 42, 22));
    });
});

describe('Gilded Rose - negative sellIn', () => {

    it('sellIn sub zero - quality decreases twice as fast', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('random item', -2, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('random item', -3, 13));
    });

    it('Aged Brie sub zero sellIn - quality increases twice as fast', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Aged Brie', -2, 15) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Aged Brie', -3, 17));
    });

    it('conjured - sub zero - quality decreases by four', () => {
        // Given
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', -2, 24) ]);

        // When
        const items = gildedRose.updateQuality();

        // Then
        expect(items[0]).deep.equal(new Item('Conjured Mana Cake', -3, 20));
    });
});
