import { Entity as TOEntity, Column, Index } from "typeorm";
import Entity from "./Entity";

@TOEntity("examples")
export default class Example extends Entity {
  constructor(ex: Partial<Example>) {
    super();
    Object.assign(this, ex);
  }

  @Index()
  @Column()
  name: string;
}
