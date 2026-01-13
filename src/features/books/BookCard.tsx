import { useId, useState } from "react";
import type { Book } from "../../types/Book";
import { SafeImage } from "../../components/ui/SafeImage";
import { Button } from "../../components/ui/Button";

interface BookCardProps {
    book: Book
}

export const BookCard = ({book}: BookCardProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const descriptionId = `desc-${useId()}`;

    return(
        <article className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4 bg-white">
            <div className='shrink-0'>
                <SafeImage
                src={book.imageUrl}
                alt={`Book ${book.title} cover`}
                className="w-full md:w-32 h-48 rounded object-cover bg-gray-100"
                />
            </div>

            <div className="flex-1 flex flex-col">
              <header className="mb-2">
                <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
              </header>

              <div 
                id={descriptionId}
                className={`flex-1 overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'}`}
                aria-hidden={!isExpanded}
              >
                <p className="text-gray-600 leading-relaxed">
                  {book.description || "No description available."}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button 
                  variant="secondary" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                  aria-controls={descriptionId}
                  className="text-sm"
                >
                  {isExpanded ? 'Hide Description' : 'Show Description'}
                </Button>
              </div>
            </div>
        </article>
    )
}