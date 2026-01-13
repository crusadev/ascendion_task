// src/features/books/components/BookList.tsx
import { useBookManager } from './hooks/useBookManager'; 
import { BookCard } from './BookCard';
import { Button } from '../../components/ui/Button';

export const BookList = () => {
  const { books, addNewBook, isPending } = useBookManager();

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      <header className="flex justify-between items-center pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Library</h1>
          <p className="text-gray-500 mt-1">Iacob Andrei Radu</p>
        </div>
        
        <Button 
          onClick={addNewBook} 
          disabled={isPending}
          className={isPending ? "opacity-70 cursor-wait" : ""}
          variant="primary"
        >
          {isPending ? 'Adding...' : 'Add New Book'}
        </Button>
      </header>

      <div className="space-y-4" role="list">
        {books.map((book) => (
          <div key={book.id} role="listitem" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <BookCard book={book} />
          </div>
        ))}
        
        {books.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No books available. Click "Add New Book" to start.
          </div>
        )}
      </div>
    </section>
  );
};