'use strict';

/**
 * adviser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adviser.adviser');
