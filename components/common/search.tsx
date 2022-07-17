import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
  onSearch: (q?: string) => void
}
export default function SearchForm(props: Props) {

  const [search, setSearch] = useState<string>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.onSearch(search);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className='mb-3'>
        <Form.Control
          name='search'
          onChange={(e: any) => setSearch(e.target.value)}
          placeholder='Search'
        />
        <Button variant='outline-secondary' type='submit'>
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}
