import { EntitySchema } from "typeorm";

export interface Category {
  id: number;
  name: string;
}

export const CategoryEntity = new EntitySchema({
  name: "category",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: { type: String },
  },
});
