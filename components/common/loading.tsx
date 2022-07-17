import { Card, Spinner } from 'react-bootstrap';

type Props = {
  show: boolean
}

/**
 * Loading component.
 * @param show
 */
export default function Loading({ show }: Props) {
  if (!show) return <></>;
  return (
    <Card>
      <Card.Body className='text-center'>
        <Spinner animation={'border'} />
        <p className='text-secondary'>
          Fetching data, please wait
        </p>
      </Card.Body>
    </Card>
  );
}
