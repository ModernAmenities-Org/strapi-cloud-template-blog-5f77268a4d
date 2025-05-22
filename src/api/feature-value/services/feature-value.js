'use strict';

/**
 * feature-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feature-value.feature-value');
