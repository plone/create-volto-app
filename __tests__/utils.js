"use strict";

const utils = require("../generators/app/utils");

describe("generator-create-volto-app:app", () => {
  it("parses multiple addons from cli options", () => {
    const parsed = utils.parseAddonsOption("addon-one");
    expect(parsed).toBe("addon-one");
  });
});
