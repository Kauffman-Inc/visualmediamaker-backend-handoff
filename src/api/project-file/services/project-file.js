'use strict';

/**
 * project-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-file.project-file');
