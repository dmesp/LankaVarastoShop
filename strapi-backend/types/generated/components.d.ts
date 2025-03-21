import type { Schema, Struct } from '@strapi/strapi';

export interface QuantityQuantity extends Struct.ComponentSchema {
  collectionName: 'components_quantity_quantities';
  info: {
    displayName: 'quantity';
    icon: 'bulletList';
  };
  attributes: {
    quantity: Schema.Attribute.Integer;
  };
}

export interface WeightWeight extends Struct.ComponentSchema {
  collectionName: 'components_weight_weights';
  info: {
    displayName: 'weight';
    icon: 'calendar';
  };
  attributes: {
    weight: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quantity.quantity': QuantityQuantity;
      'weight.weight': WeightWeight;
    }
  }
}
