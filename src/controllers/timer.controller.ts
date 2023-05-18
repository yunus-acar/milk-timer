import { Response, Request } from "express";
import axios from "axios";
import { PrismaClient, Status } from "@prisma/client";
const prisma = new PrismaClient();

const userById: any = {
  "044E70A2A36581": "Kaan",
  "045A70A2A36581": "Kerem",
};

class TimerController {
  async add(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "id is required" });
    if (!userById[id])
      return res.status(400).json({ message: "user not found" });
    try {
      const { time, status } = req.body;
      const create = await prisma.milk.create({
        data: {
          cardId: id,
          name: userById[id] as string,
          date: new Date(time),
          status: status,
        },
      });
      return res.status(200).json({ message: "success", data: create });
    } catch (error) {
      console.log("🌵💜🐢 error", error);
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
  async name(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "id is required" });
    if (!userById[id])
      return res.status(400).json({ message: "user not found" });
    try {
      const children = await prisma.milk.findMany({
        where: {
          cardId: {
            equals: id,
          },
        },
      });
      return res
        .status(200)
        .json({ message: "success", name: userById[id], data: children });
    } catch (error) {
      console.log("🌵💜🐢 error", error);
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
  async list(req: Request, res: Response) {
    let where: any = {};
    const { id } = req.query;
    if (id) where = { cardId: id };
    try {
      const list = await prisma.milk.findMany({
        where,
        orderBy: {
          date: "desc",
        },
      });
      return res.status(200).json({ message: "success", data: list });
    } catch (error) {
      console.log("🌵💜🐢 error", error);
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
  async dayCount(req: Request, res: Response) {
    try {
      const list = await prisma.milk.groupBy({
        where: {
          date: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lte: new Date(new Date().setHours(23, 59, 59, 999)),
          },
          status: Status.MILK,
        },
        by: ["name"],
        _count: {
          name: true,
        },
      });
      return res.status(200).json({ message: "success", data: list });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
}

export default new TimerController();
