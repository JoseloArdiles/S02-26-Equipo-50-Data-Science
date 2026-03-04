import { z } from 'zod';
import ProductCategory from '../enums/ProductCategory.js';

const ProductVariantSchema = z.object({
  id: z.string().uuid().optional(),
  sku: z.string().toUpperCase().min(3, "El SKU debe tener al menos 3 caracteres"),
  size: z.string().min(1, "La talla es obligatoria"),
  color: z.string().optional(),
  price: z.number().positive("El precio debe ser mayor a 0"),
  stock: z.number().int().nonnegative().default(0)
});

const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().optional(),
  category: z.nativeEnum(ProductCategory),
  gender: z.string().optional(),
  style: z.string().optional(),
  active: z.boolean().optional().default(true),
  
  variants: z.array(ProductVariantSchema).min(1, "Debe tener al menos una variante")
});

export default ProductSchema;