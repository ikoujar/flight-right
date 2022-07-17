import { Pagination as BootstrapPagination } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { cleanQueryParams } from '../../utils/helpers';

type Props = {
  count: number,
}
/**
 * Pagination component.
 * @param count
 * @constructor
 */
export default function Pagination({ count }: Props) {

  const router = useRouter();
  const active = router.query.page || 1;
  const onChange = (page: number) => {
    router.push({
      query: cleanQueryParams({ ...router.query, page })
    });
  };

  if (count <= 1) return <></>;

  return (
    <BootstrapPagination className='justify-content-center'>
      {
        new Array(count).fill(0).map(
          (_, i) => {
            i++;
            return (
              <BootstrapPagination.Item
                key={i}
                active={i == active}
                onClick={() => onChange(i)}
              >
                {i}
              </BootstrapPagination.Item>
            );
          }
        )
      }

    </BootstrapPagination>
  );
}
