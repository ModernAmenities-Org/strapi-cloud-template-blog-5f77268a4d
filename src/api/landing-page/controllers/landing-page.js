"use strict";

const testimonial = require("../../testimonial/controllers/testimonial");

/**
 * landing-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::landing-page.landing-page",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany(
        "api::landing-page.landing-page",
        {
          populate: {
            hero: { populate: "*" },
            faq: {
              populate: {
                ctaBlock: {
                  populate: ["bgImage"],
                },
                faqs: {
                  populate: "*",
                },
              },
            },
            roadmap: {
              populate: {
                card: {
                  populate: ["icon"],
                },
                bgImage: { populate: "*" },
              },
            },
            feature: {
              populate: {
                card: {
                  populate: ["icon"],
                },
                bgImage: { populate: "*" },
              },
            },
            ecosystem: {
              populate: {
                carouselCard: { populate: "*" },
              },
            },
            testimonial: {
              populate: {
                testimonials: {
                  populate: ["avatar"],
                },
                bgImage: { populate: "*" },
              },
            },
          },
        }
      );
      return entity;
    },
  })
);
