import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('TASKFLOW')
    .setDescription(
      'A TaskFlow é uma aplicação para gerenciamento de tarefas de equipe, oferecendo funcionalidades para autenticação, gerenciamento de usuários e controle de tarefas. Projetada para facilitar a colaboração e a eficiência no trabalho em equipe.',
    )
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
