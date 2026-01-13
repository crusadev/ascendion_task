import { useState, useOptimistic, useTransition } from 'react'
import { type Book } from '../../../types/Book'
import { INITIAL_DATA } from '../../../data/INITIAL_DATA'

export const useBookManager = () => {
    const [books, setBooks] = useState<Book[]>(INITIAL_DATA);
    const [isPending, startTransition] = useTransition();
    const [optimisticBooks, addOptimisticBook] = useOptimistic(
        books,
        (state: Book[], newBook: Book) => [newBook, ...state]
    )

    const addNewBook = async() => {
        const newBook: Book = {
          id: crypto.randomUUID(),
          title: `New Book ${optimisticBooks.length + 1}`,
          description: 'This is a dynamically added book description. It demonstrates the list update logic.',
          imageUrl: null,
          createdAt: Date.now(),
        };

        startTransition(async () => {
            addOptimisticBook(newBook);

            await new Promise(resolve => setTimeout(resolve, 500)); //We simulte a backend call for example

            setBooks(prev => [newBook, ...prev]);
        });

    }

    return {
        books: optimisticBooks,
        addNewBook,
        isPending
    }
}