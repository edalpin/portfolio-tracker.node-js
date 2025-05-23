import { UpdateCategoryDto } from "@/domain/dtos/category/update";
import { CategoryEntity } from "@/domain/entities/category";
import { CustomError } from "@/domain/errors/custom";
import { categoryErrorMessages } from "@/domain/errors/messages";
import { CategoryRepository } from "@/domain/repositories/category";
import { DatabaseValidator } from "@/domain/validators/data-base";

export class UpdateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly databaseValidator: DatabaseValidator,
  ) {}

  async execute(id: string, dto: UpdateCategoryDto): Promise<CategoryEntity> {
    if (!this.databaseValidator.isValidId(id)) {
      throw CustomError.badRequest(categoryErrorMessages.invalidId);
    }
    const category = await this.categoryRepository.updateById(id, dto);
    if (!category) {
      throw CustomError.badRequest(categoryErrorMessages.notFound);
    }

    return category;
  }
}
