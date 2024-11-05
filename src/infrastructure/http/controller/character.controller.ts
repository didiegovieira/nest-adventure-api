import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { Character } from 'src/domain/entity/character.entity';
import { CharacterUsecase } from 'src/application/usecase/character.usecase';
import { CreateCharacterDto } from 'src/application/dto/create-character.dto';
import { UpdateCharacterDto } from 'src/application/dto/update-character.dto';

@Crud({
  model: {
    type: Character,
  },
  dto: {
    create: CreateCharacterDto,
    update: UpdateCharacterDto,
  }
})
@Controller('characters')
export class CharacterController implements CrudController<Character> {
  constructor(public service: CharacterUsecase) {}
}
