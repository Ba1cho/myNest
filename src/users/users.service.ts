import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt'

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
    createUserDto.password = await this.Hashpassword(createUserDto.password)
    await this.userRepository.save(createUserDto)
    return createUserDto
  }
  // получение по id
  public async getUserData(id: number) {
    return await this.userRepository.findOne({where: { id:id }})
  }
  public async findAll() {
    return await this.userRepository.find({
      select: this.availableFields as any
    })
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  public async updateUserData(id: number, body: UpdateUserDto) {
    return await this.userRepository.update(
      { id },
      this.filterFields(body)
    )
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
