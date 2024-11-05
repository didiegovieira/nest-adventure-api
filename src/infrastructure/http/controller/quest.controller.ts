import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { Quest } from 'src/domain/entity/quest.entity';
import { QuestUsecase } from 'src/application/usecase/quest.controller';
import { CreateQuestDto } from 'src/application/dto/create-quest.dto';
import { UpdateQuestDto } from 'src/application/dto/update-quest.dto';

@Crud({
  model: {
    type: Quest,
  },
  dto: {
    create: CreateQuestDto,
    update: UpdateQuestDto,
  }
})
@Controller('quests')
export class QuestController implements CrudController<Quest> {
  constructor(public service: QuestUsecase) {}
}
