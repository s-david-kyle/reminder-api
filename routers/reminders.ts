import { Router } from "express";

interface CreateReminderDto {
  title: string;
}

const router = Router();

router.get("/", (req, res) => {
  res.send("list of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.send({ title });
});

export default router;
