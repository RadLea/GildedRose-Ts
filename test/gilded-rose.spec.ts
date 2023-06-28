import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('normal item', function() {
        const gildedRose = new GildedRose([ new Item('burger', 25, 15) ]);
        const items = gildedRose.updateQuality();
        expect(items[0]).deep.equal(new Item('burger', 24, 14));
    });

});
