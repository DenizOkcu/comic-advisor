import ComicsSerializer from "./ComicsSerializer";

import {
  inValidResponse,
  validResponse,
  validSerializedData
} from "../data/testApiData";

describe("ComicsSerializer", () => {
  it("serializes the test data correctly", () => {
    const serializer = new ComicsSerializer();

    expect(serializer.serialize(validResponse)).toEqual(validSerializedData);
    expect(serializer.serialize(inValidResponse)).toEqual([]);
  });
});
