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

export interface ComponentsFeaturedProduct extends Schema.Component {
  collectionName: 'components_components_featured_products';
  info: {
    displayName: 'Featured_product';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    urlPath: Attribute.String;
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

export interface ComponentsHomeFeed extends Schema.Component {
  collectionName: 'components_components_home_feeds';
  info: {
    displayName: 'Home_feed';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    urlPath: Attribute.String;
  };
}

export interface ComponentsNavMenuListItem extends Schema.Component {
  collectionName: 'components_components_nav_menu_list_items';
  info: {
    displayName: 'Navbar_menu_list_items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item_1_title: Attribute.String;
    item_1_subtitle: Attribute.String;
    item_2_title: Attribute.String;
    item_2_subtitle: Attribute.String;
    item_3_title: Attribute.String;
    item_3_subtitle: Attribute.String;
    item_4_title: Attribute.String;
    item_4_subtitle: Attribute.String;
    item_5_title: Attribute.String;
    item_5_subtitle: Attribute.String;
    item_6_title: Attribute.String;
    item_6_subtitle: Attribute.String;
  };
}

export interface ComponentsNavbarMenuList1 extends Schema.Component {
  collectionName: 'components_components_navbar_menu_list_1s';
  info: {
    displayName: 'Navbar_menu_list_1';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Navbar_menu_list_cover: Attribute.Component<'components.navbar-menu-list-cover'>;
    Navbar_menu_list_item_1: Attribute.Component<'components.nav-menu-list-item'>;
  };
}

export interface ComponentsNavbarMenuListCover extends Schema.Component {
  collectionName: 'components_components_navbar_menu_list_covers';
  info: {
    displayName: 'Navbar_menu_list_cover';
    icon: 'server';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ComponentsNavbarMenu extends Schema.Component {
  collectionName: 'components_components_navbar_menus';
  info: {
    displayName: 'Navbar_menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Navbar_menu_1: Attribute.String;
    Navbar_menu_2: Attribute.String;
    Navbar_menu_3: Attribute.String;
    Navbar_menu_4: Attribute.String;
    Navbar_menu_5: Attribute.String;
  };
}

export interface ComponentsProductCategoryCard extends Schema.Component {
  collectionName: 'components_components_product_category_cards';
  info: {
    displayName: 'Product-category-card';
    icon: 'picture';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
    urlPath: Attribute.String;
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

export interface ComponentsSectionBanner extends Schema.Component {
  collectionName: 'components_components_section_banners';
  info: {
    displayName: 'Section_banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProductSize extends Schema.Component {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'Product_options';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    value: Attribute.String;
    category_number: Attribute.String;
    price: Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.about-bottom-sector': ComponentsAboutBottomSector;
      'components.about-middle-sector': ComponentsAboutMiddleSector;
      'components.about-panel': ComponentsAboutPanel;
      'components.about-top-sector': ComponentsAboutTopSector;
      'components.featured-product': ComponentsFeaturedProduct;
      'components.hero-slide': ComponentsHeroSlide;
      'components.home-feed': ComponentsHomeFeed;
      'components.nav-menu-list-item': ComponentsNavMenuListItem;
      'components.navbar-menu-list-1': ComponentsNavbarMenuList1;
      'components.navbar-menu-list-cover': ComponentsNavbarMenuListCover;
      'components.navbar-menu': ComponentsNavbarMenu;
      'components.product-category-card': ComponentsProductCategoryCard;
      'components.product-category-header': ComponentsProductCategoryHeader;
      'components.section-banner': ComponentsSectionBanner;
      'product.size': ProductSize;
    }
  }
}
