/**
 * product controller
 */

import { factories } from "@strapi/strapi";
const schema = require("../content-types/product/schema.json");
const createPopulatedController = require("../../../helpers/populate");

export default createPopulatedController("api::product.product", schema);
