import type { Schema, Attribute } from '@strapi/strapi';

export interface AllDeliverableSets extends Schema.Component {
  collectionName: 'components_csf_deliverable_sets';
  info: {
    displayName: 'Set Fields';
    icon: 'television';
    description: '';
  };
  attributes: {
    due: Attribute.Date;
    name: Attribute.String & Attribute.Required;
  };
}

export interface AllTaskFields extends Schema.Component {
  collectionName: 'components_all_task_fields';
  info: {
    displayName: 'Task Fields';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    assigned: Attribute.Enumeration<['both', 'fellow', 'mentor']> &
      Attribute.Required;
    completed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'all.deliverable-sets': AllDeliverableSets;
      'all.task-fields': AllTaskFields;
    }
  }
}
