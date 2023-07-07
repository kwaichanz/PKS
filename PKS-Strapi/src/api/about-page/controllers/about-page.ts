/**
 * about-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::about-page.about-page",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::about-page.about-page",
        {
          ...query,
          populate: {
            About_banner: {
              populate: {
                image: true,
              },
            },
            About_top_sector: {
              populate: {
                image: true,
              },
            },
            About_middle_sector: {
              populate: {
                image: true,
              },
            },
            About_bottom_sector: {
              populate: {
                image: true,
              },
            },
          },
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
