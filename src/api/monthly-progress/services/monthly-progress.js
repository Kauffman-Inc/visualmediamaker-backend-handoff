'use strict';

/**
 * monthly-progress service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-progress.monthly-progress');
