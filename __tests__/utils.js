"use strict";

const utils = require("../generators/app/utils");

describe("generator-create-volto-app:app", () => {
  it("parses one simple addon", () => {
    const parsed = utils.parseAddonsOption("addon-one");
    expect(parsed).toStrictEqual(["addon-one"]);
  });

  it("parses multiple simple addons", () => {
    const parsed = utils.parseAddonsOption("addon-one,addon-two");
    expect(parsed).toStrictEqual(["addon-one", "addon-two"]);
  });

  it("parses one addon with extra loader", () => {
    const parsed = utils.parseAddonsOption("addon-one:loadExtraA,loadExtraB");
    expect(parsed).toStrictEqual(["addon-one:loadExtraA,loadExtraB"]);
  });

  it("parses multiple addons with extra loader for second", () => {
    const parsed = utils.parseAddonsOption(
      "addon-two,addon-one:loadExtraA,loadExtraB"
    );
    expect(parsed).toStrictEqual([
      "addon-two",
      "addon-one:loadExtraA,loadExtraB"
    ]);
  });

  it("parses multiple addons with extra loader for first", () => {
    const parsed = utils.parseAddonsOption(
      "addon-one:loadExtraA,loadExtraB,addon-two"
    );
    expect(parsed).toStrictEqual([
      "addon-one:loadExtraA,loadExtraB",
      "addon-two"
    ]);
  });

  it("parses multiple addons with extra loaders for both", () => {
    const parsed = utils.parseAddonsOption(
      "addon-one:loadExtraA,loadExtraB,addon-two:loadExtraB,loadExtraC"
    );
    expect(parsed).toStrictEqual([
      "addon-one:loadExtraA,loadExtraB",
      "addon-two:loadExtraB,loadExtraC"
    ]);
  });
});
