import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt'
import { ApiErorr } from 'src/error/erors';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // параметры для обнавления данных
  availableFields = [
    'nameFirst',
    'email',
    'birthDate',
    'role',
  ]
  // функция изменения параметров учетки
  private filterFields(body: { [k: string]: any }) {
    const filteredBody: { [k: string]: any } = {}

    Object.keys(body).filter((k) => {
      if (this.availableFields.includes(k)) {
        filteredBody[k] = body[k]
      }
    })

    return filteredBody
  }

  // генерация хеш пароля 
  async Hashpassword(password){
    return hash(password, 10);
  }
  // создание учетки
  async create(createUserDto): Promise<CreateUserDto> {
    const age = createUserDto.birthDate
    if(age<1) throw new BadRequestException(ApiErorr.USER_EXIST) 
    createUserDto.password = await this.Hashpassword(createUserDto.password)
    await this.userRepository.save(createUserDto)
    return createUserDto
  }
  // получение по id
  public async getUserData(id: number) {
    return await this.userRepository.findOne({where: { id:id }})
  }
  // вывод всех пользователей
  public async findAll() {
    return await this.userRepository.find()
  }
  
  public async findOne(id: number) {
    return await this.userRepository.findOne({where: { id:id }})
  }

  public async updateUserData(id: number, body: UpdateUserDto) {
    return await this.userRepository.update(
      { id },
      this.filterFields(body)
    )
  }

  public async deleteUser(id: number) {
    return await this.userRepository.delete(id)
  }
}
