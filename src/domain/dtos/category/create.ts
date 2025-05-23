import { BaseCategoryDto } from "@/domain/dtos/category/base";
import { GenericObject } from "@/shared/types";

export class CreateCategoryDto extends BaseCategoryDto {
  constructor(object: GenericObject) {
    super(object);
  }
}
