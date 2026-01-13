import type { Book } from "../types/Book";

const currentTimestamp = new Date().getTime();

export const INITIAL_DATA: Book[] = [
  {
    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    title: 'Designing Data-Intensive Applications',
    description: 'The definitive guide to the big ideas behind reliable, scalable, and maintainable systems. Essential reading for handling complex data in enterprise environments.',
    imageUrl: 'https://www.oreilly.com/covers/urn:orm:book:9781491903063/300w/',
    createdAt: currentTimestamp,
  },
  {
    id: 'b5f1a2c3-8d9e-4f0a-1b2c-3d4e5f6a7b8c',
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    description: 'The foundational text for our Hexagonal Architecture approach, focusing on aligning software implementation with the business model.',
    imageUrl: 'https://m.media-amazon.com/images/I/81ykBjVaUjL._SL1500_.jpg',
    createdAt: currentTimestamp,
  },
  {
    id: 'c6g2b3d4-9e0f-5a1b-2c3d-4e5f6a7b8c9d',
    title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    description: 'A critical resource for understanding dependency rules and boundaries, ensuring our NestJS application remains decoupled and testable.',
    imageUrl: 'https://m.media-amazon.com/images/I/71stxGw9JgL._SL1500_.jpg',
    createdAt: currentTimestamp,
  },
  {
    id: 'd7h3c4e5-0f1a-6b2c-3d4e-5f6a7b8c9d0e',
    title: 'Refactoring: Improving the Design of Existing Code',
    description: 'A catalog of best practices for improving the design of existing code without changing its external behavior, vital for long-term maintenance.',
    imageUrl: 'https://asdufhawyegriyasdfvnao.tret',
    createdAt: currentTimestamp,
  },
  {
    id: 'e8i4d5f6-1a2b-7c3d-4e5f-6a7b8c9d0e1f',
    title: '12 Rules for Life: An Antidote to Chaos',
    description: 'A psychological exploration of individual responsibility and meaning, offering a perspective on order and chaos relevant to life and systems.',
    imageUrl: 'https://m.media-amazon.com/images/I/71BfeUyOOfL._SL1500_.jpg',
    createdAt: currentTimestamp,
  },
];