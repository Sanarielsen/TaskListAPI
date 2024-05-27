import { randomUUID } from 'node:crypto';
import { Database } from "../../database.js"

const database = new Database();

export const postTask = (req, res) => {
  const { title, description } = req.body;

  const currentDate = new Date();

  const task = {
    id: randomUUID(),
    title,
    description,
    completedAt: "",
    createdAt: currentDate.toISOString(),
    updatedAt: currentDate.toISOString(),
  }

  database.insert("tasks", task);

  return res.writeHead(201).end(JSON.stringify(task));
}