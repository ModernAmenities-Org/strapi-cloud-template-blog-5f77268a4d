"use strict";

/**
 * plan-feature controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::plan-feature.plan-feature",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany(
        "api::plan-feature.plan-feature",
        {
          populate: {
            features: true,
          },
        }
      );
      return entity;
    },
  })
);
