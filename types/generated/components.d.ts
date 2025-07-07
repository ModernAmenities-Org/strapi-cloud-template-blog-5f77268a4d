import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsButtonsComponent extends Struct.ComponentSchema {
  collectionName: 'components_sections_buttons_components';
  info: {
    displayName: 'ButtonsComponent';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
  };
}

export interface SectionsEcosystem extends Struct.ComponentSchema {
  collectionName: 'components_sections_ecosystems';
  info: {
    displayName: 'ecosystem';
  };
  attributes: {
    carouselCard: Schema.Attribute.Component<'shared.carousel-card', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsFooterFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_footer_faq_sections';
  info: {
    description: '';
    displayName: 'Faq-Section';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: '';
    displayName: 'Hero-section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorksSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works_sections';
  info: {
    description: '';
    displayName: 'howItWorksSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    steps: Schema.Attribute.Component<'sections.how-it-works-step', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorksStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works_steps';
  info: {
    displayName: 'howItWorksStep';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsKeyBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_key_benefits';
  info: {
    displayName: 'keyBenefits';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    card: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.Text;
  };
}

export interface SectionsLandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_landing_page_hero_sections';
  info: {
    description: '';
    displayName: 'Landing-Hero-section';
  };
  attributes: {
    avatars: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    buttons: Schema.Attribute.Component<'sections.buttons-component', true>;
    description: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    joinText: Schema.Attribute.String;
    revenue: Schema.Attribute.Component<'sections.revenue-section', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsModularDashboardCarouselItem
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_modular_dashboard_carousel_items';
  info: {
    displayName: 'Modular-Dashboard-Carousel-Item';
  };
  attributes: {
    ctaBlock: Schema.Attribute.Component<'shared.info-section', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPlanFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_plan_feature_sections';
  info: {
    displayName: 'Plan-feature-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPlatinumAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_sections_platinum_advantages';
  info: {
    description: '';
    displayName: 'PlatinumAdvantage';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shared.advantage-item', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsRevenueSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_revenue_sections';
  info: {
    displayName: 'Revenue-section';
  };
  attributes: {
    description: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsRoadmapSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_roadmap_sections';
  info: {
    description: '';
    displayName: 'Roadmap-section';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    card: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsVendLead extends Struct.ComponentSchema {
  collectionName: 'components_sections_vend_leads';
  info: {
    description: '';
    displayName: 'vend-Lead';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAdvantageItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantage_items';
  info: {
    description: '';
    displayName: 'AdvantageItem';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedBullets extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullets';
  info: {
    description: '';
    displayName: 'bullet-point';
  };
  attributes: {
    point: Schema.Attribute.Text;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCarouselCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_cards';
  info: {
    description: '';
    displayName: 'carouselCard';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.bullets', true>;
    button: Schema.Attribute.Component<'sections.buttons-component', false>;
    iconName: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_cards';
  info: {
    description: '';
    displayName: 'Contact-card';
  };
  attributes: {
    cardDescription: Schema.Attribute.String;
    descriptionUrl: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    info: Schema.Attribute.Component<'shared.contact-info-block', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_blocks';
  info: {
    displayName: 'Contact-info-block';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedDetailsItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_details_items';
  info: {
    description: '';
    displayName: 'Details-item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
  };
}

export interface SharedDetailsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_details_sections';
  info: {
    description: '';
    displayName: 'Details-section';
  };
  attributes: {
    detailsItem: Schema.Attribute.Component<'shared.details-item', true>;
    heading: Schema.Attribute.Text;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    question: Schema.Attribute.String;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    description: '';
    displayName: 'faq-section';
  };
  attributes: {
    ctaBlock: Schema.Attribute.Component<'shared.info-section', false>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.Text;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.icon-block', true>;
    innovationDescription: Schema.Attribute.String;
    innovationTitle: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer-Column';
  };
  attributes: {
    textLink: Schema.Attribute.Component<'shared.footer-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer-Link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedIconBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_blocks';
  info: {
    description: '';
    displayName: 'icon-block';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_sections';
  info: {
    description: '';
    displayName: 'info-section';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPublicRoutes extends Struct.ComponentSchema {
  collectionName: 'components_shared_public_routes';
  info: {
    displayName: 'Public Route';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_blocks';
  info: {
    displayName: 'section-block';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social-Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials_sections';
  info: {
    description: '';
    displayName: 'testimonials-section';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.buttons-component': SectionsButtonsComponent;
      'sections.ecosystem': SectionsEcosystem;
      'sections.footer-faq-section': SectionsFooterFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.how-it-works-section': SectionsHowItWorksSection;
      'sections.how-it-works-step': SectionsHowItWorksStep;
      'sections.key-benefits': SectionsKeyBenefits;
      'sections.landing-page-hero-section': SectionsLandingPageHeroSection;
      'sections.modular-dashboard-carousel-item': SectionsModularDashboardCarouselItem;
      'sections.plan-feature-section': SectionsPlanFeatureSection;
      'sections.platinum-advantage': SectionsPlatinumAdvantage;
      'sections.revenue-section': SectionsRevenueSection;
      'sections.roadmap-section': SectionsRoadmapSection;
      'sections.vend-lead': SectionsVendLead;
      'shared.advantage-item': SharedAdvantageItem;
      'shared.bullets': SharedBullets;
      'shared.card': SharedCard;
      'shared.carousel-card': SharedCarouselCard;
      'shared.contact-card': SharedContactCard;
      'shared.contact-info-block': SharedContactInfoBlock;
      'shared.details-item': SharedDetailsItem;
      'shared.details-section': SharedDetailsSection;
      'shared.faq': SharedFaq;
      'shared.faq-section': SharedFaqSection;
      'shared.feature': SharedFeature;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-link': SharedFooterLink;
      'shared.icon-block': SharedIconBlock;
      'shared.info-section': SharedInfoSection;
      'shared.public-routes': SharedPublicRoutes;
      'shared.section-block': SharedSectionBlock;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.team-member': SharedTeamMember;
      'shared.testimonials-section': SharedTestimonialsSection;
    }
  }
}
