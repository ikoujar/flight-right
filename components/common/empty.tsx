import { Card } from 'react-bootstrap';
import { TbMapSearch } from 'react-icons/tb';

type Props = {
  show: boolean
}

export default function Empty({ show }: Props) {
  if (!show) return <></>;
  return (
    <Card>
      <Card.Body className='text-center'>
        <TbMapSearch size={120} className='text-secondary' />
        <p className='text-secondary'>
          Sorry there are no results
        </p>
      </Card.Body>
    </Card>
  );
}
