/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";
const schema = require("../content-types/home-page/schema.json");
const createPopulatedController = require("../../../helpers/populate");

export default createPopulatedController("api::home-page.home-page", schema);
