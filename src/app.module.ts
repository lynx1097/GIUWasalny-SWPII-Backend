import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { PrismaService } from './prisma/prisma.service';
import { TestuserModule } from './testuser/testuser.module'; // Import TestUsersModule
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Auto-generates schema
      sortSchema: true,
      playground: true,
    }),
    TestuserModule, // Import TestUsersModule
  ],
  controllers: [], // Removed the AppController
  providers: [AppResolver, PrismaService, AppService], // Register the AppService
})
export class AppModule {}
