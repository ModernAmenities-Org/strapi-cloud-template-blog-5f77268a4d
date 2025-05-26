"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::footer.footer", {
      populate: {
        footerColumn: { populate: "*" },
        logo: { populate: "*" },
        socialLinks: { populate: "*" },
      },
    });
    return entity;
  },
}));
