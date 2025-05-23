import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: '';
    displayName: 'Hero-section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeadCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_cards';
  info: {
    displayName: 'lead-card';
  };
  attributes: {
    city: Schema.Attribute.String;
    hoursOfOperation: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leadStatus: Schema.Attribute.String;
    machinesRequested: Schema.Attribute.Integer;
    occupancyCount: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    postedAgo: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsVendLead extends Struct.ComponentSchema {
  collectionName: 'components_sections_vend_leads';
  info: {
    description: '';
    displayName: 'vend-Lead';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    vendLead: Schema.Attribute.Component<'sections.lead-card', true>;
  };
}

export interface SharedContactCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_cards';
  info: {
    description: '';
    displayName: 'Contact-card';
  };
  attributes: {
    CardDescription: Schema.Attribute.String;
    DescriptionUrl: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Info: Schema.Attribute.Component<'shared.contact-info-block', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedContactInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_blocks';
  info: {
    displayName: 'Contact-info-block';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'faq-section';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.Text;
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
    InnovationDescription: Schema.Attribute.String;
    InnovationTitle: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer-Column';
  };
  attributes: {
    TextLink: Schema.Attribute.Component<'shared.footer-link', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer-Link';
  };
  attributes: {
    Text: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SharedIconBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_blocks';
  info: {
    displayName: 'icon-block';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_sections';
  info: {
    displayName: 'info-section';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    ButtonUrl: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_blocks';
  info: {
    displayName: 'section-block';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
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
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Url: Schema.Attribute.String;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: '';
    displayName: ' Team Member';
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
    displayName: 'testimonials-section';
  };
  attributes: {
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
      'sections.hero-section': SectionsHeroSection;
      'sections.lead-card': SectionsLeadCard;
      'sections.vend-lead': SectionsVendLead;
      'shared.contact-card': SharedContactCard;
      'shared.contact-info-block': SharedContactInfoBlock;
      'shared.faq-section': SharedFaqSection;
      'shared.feature': SharedFeature;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-link': SharedFooterLink;
      'shared.icon-block': SharedIconBlock;
      'shared.info-section': SharedInfoSection;
      'shared.section-block': SharedSectionBlock;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.team-member': SharedTeamMember;
      'shared.testimonials-section': SharedTestimonialsSection;
    }
  }
}
