// UpdateProductDTO.js
// Data Transfer Object for updating a product

import ProductSchema from '../schemas/product.schema.js';
import ValidationError from '../errors/ValidationError.js';

class UpdateProductDTO {
  constructor(data) {
    this.data = this.validate(data);
  }

  validate(data) {
    try {
      const updateSchema = ProductSchema.partial();
      
      return updateSchema.parse(data);
    } catch (error) {
      throw new ValidationError(
        error.errors.map(e => `${e.path}: ${e.message}`).join(', ')
      );
    }
  }

  getValues() {
    return this.data;
  }
}

export default UpdateProductDTO;
