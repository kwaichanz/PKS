import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHeroSlide extends Schema.Component {
  collectionName: 'components_components_hero_slides';
  info: {
    displayName: 'Hero-slide';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
  };
}

export interface ComponentsProductCategoryCard extends Schema.Component {
  collectionName: 'components_components_product_category_cards';
  info: {
    displayName: 'Product-category-card';
    icon: 'picture';
  };
  attributes: {
    category_name: Attribute.String;
    Category_images: Attribute.Media;
    Inner_text: Attribute.String;
  };
}

export interface ComponentsProductCategoryHeader extends Schema.Component {
  collectionName: 'components_components_product_category_headers';
  info: {
    displayName: 'Product-category-header';
    icon: 'quote';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.hero-slide': ComponentsHeroSlide;
      'components.product-category-card': ComponentsProductCategoryCard;
      'components.product-category-header': ComponentsProductCategoryHeader;
    }
  }
}
