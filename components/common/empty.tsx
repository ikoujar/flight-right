import { Card } from 'react-bootstrap';
import { TbMapSearch } from 'react-icons/tb';

type Props = {
  show: boolean
}
/**
 * Empty results component.
 * @param show
 */
export default function Empty({ show }: Props) {
  if (!show) return <></>;
  return (
    <Card>
      <Card.Body className='text-center'>
        <TbMapSearch size={120} className='text-secondary' />
        <p className='text-secondary'>
          {'Sorry we couldn\'t find any results'}
        </p>
      </Card.Body>
    </Card>
  );
}
