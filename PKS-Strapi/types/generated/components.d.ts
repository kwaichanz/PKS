import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAboutBottomSector extends Schema.Component {
  collectionName: 'components_components_about_bottom_sectors';
  info: {
    displayName: 'About_bottom_sector';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsAboutMiddleSector extends Schema.Component {
  collectionName: 'components_components_about_middle_sectors';
  info: {
    displayName: 'About_middle_sector';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsAboutPanel extends Schema.Component {
  collectionName: 'components_components_about_panels';
  info: {
    displayName: 'About_banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsAboutTopSector extends Schema.Component {
  collectionName: 'components_components_about_top_sectors';
  info: {
    displayName: 'About_top_sector';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

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
      'components.about-bottom-sector': ComponentsAboutBottomSector;
      'components.about-middle-sector': ComponentsAboutMiddleSector;
      'components.about-panel': ComponentsAboutPanel;
      'components.about-top-sector': ComponentsAboutTopSector;
      'components.hero-slide': ComponentsHeroSlide;
      'components.product-category-card': ComponentsProductCategoryCard;
      'components.product-category-header': ComponentsProductCategoryHeader;
    }
  }
}
