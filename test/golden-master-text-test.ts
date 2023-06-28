import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
describe("UpdateQuality", () => {
    it("should update the quality of products", () => {
        // Given
        const item1: Item = new Item("Aged Brie", 25, 37);
        const item2: Item = new Item("Sulfuras, Hand of Ragnaros", 26, 49);
        const item3: Item = new Item("Burger Vegan, ew", 12, 5);

        const itemArr: Item[] = [item1, item2, item3];

        const correctItem1: Item = new Item("Aged Brie", 24, 38);
        const correctItem2: Item = new Item("Sulfuras, Hand of Ragnaros", 26, 49);
        const correctItem3: Item = new Item("Burger Vegan, ew", 11, 4);

        const correctItemArr = [correctItem1, correctItem2, correctItem3];

        const gRose: GildedRose = new GildedRose(itemArr);

        // When
        const result = gRose.updateQuality();

        // Then
        expect(result).deep.equal(correctItemArr);

    })
})