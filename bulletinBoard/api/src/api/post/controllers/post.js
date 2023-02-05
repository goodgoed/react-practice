"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async delete(ctx) {
    ctx.query = { ...ctx.query };
    const { data, meta } = await super.delete(ctx);
    const imageIds =
      data.attributes.images?.data &&
      data.attributes.images?.data.map((item) => item.id);

    if (imageIds) {
      const deletePromises = imageIds.map(async (id) => {
        const imageEntry = await strapi.db.query("plugin::upload.file").delete({
          where: { id },
        });
        await strapi.plugins.upload.services.upload.remove(imageEntry);
      });

      Promise.all(deletePromises);
    }

    meta.date = Date.now();
    return { data, meta };
  },
}));
