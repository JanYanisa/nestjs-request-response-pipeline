import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  // UseGuards,
  // UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FreezePipe } from './pipes/freeze.pipe';
// import { LoggingInterceptor } from './interceptors/logging.interceptor';
// import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(AuthGuard) // use guard on specific path
  // @UseInterceptors(LoggingInterceptor) // use interceptor on specific path
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  examplePost(@Body(new FreezePipe()) body: any) {
    body.test = 32;
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException();
  }
}
