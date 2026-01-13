
export interface Book {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  createdAt: number;
}

export type BookAction = 
  | { type: 'ADD_BOOK'; payload: Book }
  | { type: 'SET_BOOKS'; payload: Book[] };