"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::modular-dashboard.modular-dashboard",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany(
        "api::modular-dashboard.modular-dashboard",
        {
          populate: {
            carousel: { populate: { ctaBlock: true, image: true } },
          },
          fields: ["title", "description"],
        }
      );
      return entity;
    },
  })
);
