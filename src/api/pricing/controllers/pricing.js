'use strict';

/**
 * pricing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pricing.pricing', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        plan_features: true,
        pricingHeader: true,
      },
    };
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        plan_features: true,
        pricingHeader: true,
      },
    };
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));
