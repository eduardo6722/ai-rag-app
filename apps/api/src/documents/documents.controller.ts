import { Body, Controller, Get, Post } from '@nestjs/common';
import type { Document } from '@repo/database';
import { PrismaService } from '../prisma/prisma.service.js';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  findAll(): Promise<Document[]> {
    return this.prisma.document.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Post()
  create(@Body() body: { title: string; content: string }): Promise<Document> {
    return this.prisma.document.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });
  }
}
