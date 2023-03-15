import { Response, Request } from "express";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class InfluencerController {
  async webRegister(req: Request, res: Response) {
    const data = req.body;
    try {
      if (!data.email) {
        res.status(400).json({ message: "Email is required" });
      }
      if (!data.name) {
        res.status(400).json({ message: "Name is required" });
      }

      if (!data.surname) {
        res.status(400).json({ message: "Surname is required" });
      }

      if (data.socials.length === 0) {
        res.status(400).json({
          message: "Socials are required. Please add at least one social",
        });
      }

      const influencer = await prisma.influencer.create({
        data: {
          ...data,
        },
      });
      res
        .status(200)
        .json({ message: "Influencer created successfully", influencer });
    } catch (error) {
      console.log("🌵💜🐢 error", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  async details(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const influencer = await prisma.influencer.findUnique({
        where: {
          id: id,
        },
      });
      if (!influencer?.isRead) {
        await prisma.influencer.update({
          where: {
            id: id,
          },
          data: {
            isRead: true,
          },
        });
      }
      res.status(200).json({ message: "Influencer details", influencer });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    try {
      const influencer = await prisma.influencer.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });
      res
        .status(200)
        .json({ message: "Influencer updated successfully", influencer });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const influencer = await prisma.influencer.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Influencer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  async webDelete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const influencer = await prisma.influencer.update({
        where: {
          id: id,
        },
        data: {
          isDeleted: true,
        },
      });
      res
        .status(200)
        .json({ message: "Influencer deleted successfully", influencer });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
  async list(req: Request, res: Response) {
    const { page, limit, deleted } = req.query;
    let isDeleted: boolean | any = false;
    if (deleted) {
      isDeleted = deleted;
    }
    try {
      const influencers = await prisma.influencer.findMany({
        where: {
          isDeleted: isDeleted,
        },
        skip: page ? (Number(page) - 1) * Number(limit) : 0,
        take: limit ? Number(limit) : 10,
      });
      res.status(200).json({ message: "Influencers list", influencers });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
}

export default new InfluencerController();
