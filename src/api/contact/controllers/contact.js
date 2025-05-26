"use strict";

/**
 * contact controller
 * @returns {import('@strapi/strapi').CoreController} Strapi core controller for contact
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async find(ctx) {
    // Customize the populate as needed for your Contact content type
    const entity = await strapi.entityService.findMany("api::contact.contact", {
      populate: {
        card: {
          populate: {
            Icon: {
              populate: "*",
            },
            Info: "*",
          },
        },
        ctaBlock: true,
      },
    });
    return entity;
  },
}));
