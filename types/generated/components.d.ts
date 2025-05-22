import type { Schema, Struct } from '@strapi/strapi';

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
    description: '';
    displayName: 'Contact-info-block';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
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
    description: '';
    displayName: 'info-section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-card': SharedContactCard;
      'shared.contact-info-block': SharedContactInfoBlock;
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
    }
  }
}
