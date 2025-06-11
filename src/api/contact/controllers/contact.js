"use strict";

/**
 * contact controller
 * @returns {import('@strapi/strapi').CoreController} Strapi core controller for contact
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact");
