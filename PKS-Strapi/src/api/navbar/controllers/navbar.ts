/**
 * navbar controller
 */

import { factories } from "@strapi/strapi";
const schema = require("../content-types/navbar/schema.json");
const createPopulatedController = require("../../../helpers/populate");

export default createPopulatedController("api::navbar.navbar", schema);
