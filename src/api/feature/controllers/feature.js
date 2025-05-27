"use strict";

/**
 * feature controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::feature.feature", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::feature.feature", {
      populate: {
        features: true,
      },
    });
    return entity;
  },
}));
