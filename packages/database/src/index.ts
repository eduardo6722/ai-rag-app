import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

export function createPrismaClient(
  connectionString = process.env.DATABASE_URL,
): PrismaClient {
  if (!connectionString) {
    throw new Error("DATABASE_URL is required to create a Prisma client");
  }

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export class DatabaseClient extends PrismaClient {
  constructor(connectionString = process.env.DATABASE_URL) {
    if (!connectionString) {
      throw new Error("DATABASE_URL is required to create a Prisma client");
    }

    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export function getPrismaClient(): PrismaClient {
  globalForPrisma.prisma ??= createPrismaClient();
  return globalForPrisma.prisma;
}

export { PrismaClient };
export type * from "./generated/prisma/client.js";
