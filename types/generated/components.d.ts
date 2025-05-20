import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
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
      'shared.feature': SharedFeature;
      'shared.icon-block': SharedIconBlock;
      'shared.info-section': SharedInfoSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-block': SharedSectionBlock;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team-member': SharedTeamMember;
    }
  }
}
