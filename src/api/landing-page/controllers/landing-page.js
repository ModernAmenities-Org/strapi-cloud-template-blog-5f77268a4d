"use strict";

const testimonial = require("../../testimonial/controllers/testimonial");

/**
 * landing-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::landing-page.landing-page");
