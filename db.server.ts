import { PrismaClient } from "@prisma/client";

import { singleton } from "./app/lib/singleton.server";

const prisma = singleton("prisma", () => new PrismaClient());

export { prisma };