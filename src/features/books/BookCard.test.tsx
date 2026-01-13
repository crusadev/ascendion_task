import { render, screen, fireEvent } from '@testing-library/react';
import { BookCard } from './BookCard';
import { type Book } from '../../types/Book'; 

const mockBook: Book = {
  id: 'test-1',
  title: 'Clean Architecture',
  description: 'A Craftsman Guide to Software Structure.',
  imageUrl: 'https://example.com/cover.jpg',
  createdAt: 1672531200000,
};

describe('BookCard Component', () => {
  it('renders the book details correctly', () => {
    render(<BookCard book={mockBook} />);
    
    // check title
    expect(screen.getByRole('heading', { name: /clean architecture/i })).toBeInTheDocument();
    
    // check image with alt
    const image = screen.getByRole('img', { name: /Book clean architecture cover/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockBook.imageUrl);
  });

  it('handles the description toggle interaction', () => {
    render(<BookCard book={mockBook} />);
    
    // Verify initial state
    const toggleButton = screen.getByRole('button', { name: /hide description/i });
    const description = screen.getByText(/software structure/i);
    
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(description).toBeVisible();

    // verify colapse description
    fireEvent.click(toggleButton);

    // verify colapsed state
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveTextContent(/show description/i);
  });
});