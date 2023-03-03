import { Controller, Get, Req } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  getHello (): string {
    return this.appService.getHello()
  }

  @Get('test')
  getTest (): string {
    return this.appService.getTest()
  }

  @Get()
  findAll (@Req() request: Request): string {
    return 'This action returns all cats' + request.credentials
  }
}
