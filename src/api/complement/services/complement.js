'use strict';

/**
 * complement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::complement.complement');
