"use strict";

/**
 *  about controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::about.about", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::about.about", {
      populate: {
        OurStory: { populate: ["Images"] },
        PoweredInnovation: { populate: { features: { populate: ["Icon"] } } },
        Vision: { populate: ["Images"] },
        CtaBlock: true,
      },
    });
    return entity;
  },
}));
