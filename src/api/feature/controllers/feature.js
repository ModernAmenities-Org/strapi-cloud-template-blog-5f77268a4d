"use strict";

/**
 * feature controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::feature.feature", ({ strapi }) => ({
  async find(ctx) {
    const populate = {
      icon: {
        populate: {
          Icon: true,
        },
      },
      heroBlock: {
        populate: {
          heroImage: true,
        },
      },
      vendLead: {
        populate: {
          image: true,
        },
      },
      keyBenefits: {
        populate: {
          card: {
            populate: {
              icon: true,
            },
          },
          bgImage: true,
        },

      },
      howItWorks: {
        populate: {
          image: true,
          steps: true,
        },
      },
      platinumAdvantage: {
        populate: {
          advantages: true,
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
      faq: {
        populate: {
          faqs: {
            populate: "*",
          },
        },
      },
      ctablock: true,
    };

    const entity = await strapi.entityService.findOne("api::feature.feature", 1, {
      populate
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
