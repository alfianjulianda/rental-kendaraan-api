
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PelangganModule } from './pelanggan/pelanggan.module';
import { PrismaModule } from './prisma/prisma.module';
import { KendaraanModule } from './kendaraan/kendaraan.module';
import { PenyewaanModule } from './penyewaan/penyewaan.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'rental-kendaraan-api',
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),

    PelangganModule,
    PrismaModule,
    KendaraanModule,
    PenyewaanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
