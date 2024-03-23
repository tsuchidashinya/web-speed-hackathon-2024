import { useMemo } from 'react';

import { BookListItem } from '../../../features/book/components/BookListItem';
import { useBookList } from '../../../features/book/hooks/useBookList';
import { Text } from '../../../foundation/components/Text';
import { Color, Typography } from '../../../foundation/styles/variables';
import { isContains } from '../../../lib/filter/isContains';

type Props = {
  keyword: string;
};

export const SearchResult: React.FC<Props> = ({ keyword }) => {
  const { data: books } = useBookList({ query: { name: keyword } });
  const relatedBooks = useMemo(() => {
    if (keyword === '' || !books || books.length === 0) {
      return [];
    }
    return books.filter((book) => {
      return isContains({ query: keyword, target: book.name }) || isContains({ query: keyword, target: book.nameRuby });
    });
  }, [books, keyword]);

  return (
    <>
      {relatedBooks.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
      {relatedBooks.length === 0 && (
        <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
          関連作品は見つかりませんでした
        </Text>
      )}
    </>
  );
};
