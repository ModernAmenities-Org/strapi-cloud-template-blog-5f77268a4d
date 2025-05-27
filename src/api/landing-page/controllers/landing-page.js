"use strict";

/**
 * landing-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::landing-page.landing-page",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany("api::landing-page.landing-page", {
        populate: {
          hero: { populate: "*" },
          revenue: { populate: "*" },
          faq: { populate: "*"},
          roadmap: {
            populate: {
              card: {
                populate: ['icon'],
              },
            },
          },
          feature: {
            populate: {
              card: {
                populate: ['icon'],
              },
            },
          }
        },
      });
      return entity;
    },
  })
);
