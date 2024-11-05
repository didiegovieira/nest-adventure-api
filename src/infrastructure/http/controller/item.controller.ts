import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { Item } from 'src/domain/entity/item.entity';
import { ItemUsecase } from 'src/application/usecase/item.controller';
import { CreateItemDto } from 'src/application/dto/create-item.dto';
import { UpdateItemDto } from 'src/application/dto/update-item.dto';

@Crud({
  model: {
    type: Item,
  },
  dto: {
    create: CreateItemDto,
    update: UpdateItemDto,
  }
})
@Controller('items')
export class ItemController implements CrudController<Item> {
  constructor(public service: ItemUsecase) {}
}
