import { Card } from 'react-bootstrap';
import { TbFaceIdError } from 'react-icons/tb';

type Props = {
  show: boolean
}

export default function Error({ show }: Props) {
  if (!show) return <></>;
  return (
    <Card>
      <Card.Body className='text-center'>
        <TbFaceIdError size={120} className='text-secondary' />
        <p className='text-secondary'>
          Something went wrong! please try again later.
        </p>
      </Card.Body>
    </Card>
  );
}
