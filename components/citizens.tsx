import { useContext, useEffect, useState } from 'react';
import { Citizen } from '../interfaces';
import { AppContext } from '../contexts/app.context';
import { Card, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useApi } from '../hooks/useApi';
import { FaAddressCard } from 'react-icons/fa';
import CitizenInfo from './citizen-info';
import Pagination from './common/pagination';
import { useRouter } from 'next/router';
import { cleanQueryParams } from '../utils/helpers';
import { Loading, SearchForm, Empty, Error } from './common';

type Props = {
  country: string
}

/**
 * Citizens list component
 * @param props
 */
export default function CitizensList(props: Props) {

  const router = useRouter();
  const { page, q } = router.query;
  const [pages, setPages] = useState<number>(0);
  const [search, setSearch] = useState<string>();

  const { data, loading, error } = useApi(`/api/nat/${props.country}/citizens`, { page, q });

  useEffect(() => {
    setPages(data?.pages || 0);
  }, [data]);

  useEffect(() => {
    // Rest the current page to 1 when the user performs searching.
    const params = {
      page: 1, q: search
    };
    router.push({
      query: cleanQueryParams({ ...router.query, ...params })
    });
  }, [search]);

  return (
    <>
      <SearchForm onSearch={setSearch} />
      <Row>
        {
          !!data?.items?.length &&
          data.items.map((item: Citizen) =>
            <Col key={item.id.value} md={3}>
              <ListItem item={item} />
            </Col>
          )
        }
        <Col>
          <Empty show={!error && !loading && !data?.items?.length} />
          <Loading show={loading} />
          <Error show={!!error} />
        </Col>
      </Row>
      <Row>
        <Pagination
          count={pages}
        />
      </Row>
      <CitizenInfo />
    </>
  );
}

type ItemProps = {
  item: Citizen
}

function ListItem({ item }: ItemProps) {
  const { setCitizen } = useContext(AppContext);
  return (
    <Card key={item.name.first} className='mb-4'>
      <Image
        alt={item.name.title}
        src={item.picture.large}
        width='100%'
        height={200}
      />
      <Card.Body>
        <div className={'d-flex'}>
          <Card.Title as={'h6'}>
            {item.name.title} {item.name.first} {item.name.last}
          </Card.Title>
        </div>
        <Card.Subtitle
          className='d-flex mb-2 text-muted'
        >
          <div className='flex-grow-1 my-auto'>
            {item.id.value}
          </div>
          <FaAddressCard className={'my-auto pointer'} onClick={() => setCitizen(item)} />
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}


