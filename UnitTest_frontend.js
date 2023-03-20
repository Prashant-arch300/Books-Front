import { render, screen } from '@testing-library/react';
import BookList from './BookList';

test('renders a table with book data', () => {
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '$9.99',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '$8.99',
    },
  ];
  
  render(<BookList books={books} />);
  
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
  
  const tableRows = screen.getAllByRole('row');
  expect(tableRows).toHaveLength(3); // header row plus two data rows
  
  const titleCells = screen.getAllByText(/The Great Gatsby|To Kill a Mockingbird/);
  expect(titleCells).toHaveLength(2);
  
  const authorCells = screen.getAllByText(/F. Scott Fitzgerald|Harper Lee/);
  expect(authorCells).toHaveLength(2);
  
  const priceCells = screen.getAllByText(/\$9.99|\$8.99/);
  expect(priceCells).toHaveLength(2);
});
