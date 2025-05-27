"use strict";

/**
 *  about controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::about.about", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::about.about", {
      populate: {
        ourStory: { populate: ["Images"] },
        poweredInnovation: { populate: { features: { populate: ["icon"] } } },
        vision: { populate: ["Images"] },
        ctaBlock: true,
      },
    });
    return entity;
  },
}));
