import { Pagination } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { cleanQueryParams } from '../../utils/helpers';

type Props = {
  count: number,
}
export default function BootstrapPagination({ count }: Props) {

  const router = useRouter();
  const active = router.query.page || 1;
  const onChange = (page: number) => {
    router.push({
      query: cleanQueryParams({ ...router.query, page })
    });
  };

  if (count <= 1) return <></>;

  return (
    <Pagination className='justify-content-center'>
      {
        new Array(count).fill(0).map(
          (_, i) => {
            i++;
            return (
              <Pagination.Item
                key={i}
                active={i == active}
                onClick={() => onChange(i)}
              >
                {i}
              </Pagination.Item>
            );
          }
        )
      }

    </Pagination>
  );
}
