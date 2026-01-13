// src/features/books/components/BookList.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BookList } from './BookList';

describe('BookList Integration', () => {
  it('renders the initial list of books', () => {
    render(<BookList />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);
  });

  it('optimistically adds a new book when the button is clicked', async () => {
    render(<BookList />);
    
    const addButton = screen.getByRole('button', { name: /add new book/i });

    // click add button
    fireEvent.click(addButton);

    // verify feedback, based on useOptimistic the list should increase immediately
    await waitFor(() => {
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(6);
    });

    // verify the new content
    expect(screen.getByText(/new book 6/i)).toBeInTheDocument();
  });
});