import { assert } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Verifies shuffle functionality", () => {
  it("Should shuffle the indexes of an array", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);

    assert.equal(shuffled.length, original.length);

    assert.deepEqual(shuffled.slice().sort(), original.slice().sort());

    assert.notDeepEqual(shuffled, original);
  });
});
