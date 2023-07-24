import { EntitySchema } from "typeorm";

export interface Category {
  id: number;
  name: string;
}

export const PersonEntity = new EntitySchema({
  name: "person",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstname: { type: String, length: 100 },
    lastname: { type: String, length: 100 },
    age: { type: Number, nullable: true },
  },
  checks: [{ expression: `"age">18` }],
});
