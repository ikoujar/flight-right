import { useContext } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { AppContext } from '../contexts/app.context';
import { FaMapPin } from 'react-icons/fa';
import { Citizen } from '../interfaces';
import moment from 'moment';

export default function CitizenInfo() {

  const { citizen, setCitizen } = useContext(AppContext);

  const handleClose = () => setCitizen();

  return (
    <Modal show={!!citizen} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Citizen Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {citizen && <CitizenPersonalInfo citizen={citizen} />}
      </Modal.Body>
      <Modal.Body>
        {citizen?.location && <CitizenLocationInfo citizen={citizen} />}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function CitizenPersonalInfo(props: { citizen: Citizen }) {
  const { citizen } = props;
  return (
    <Table striped hover>
      <tbody>
      <tr>
        <td>ID</td>
        <td>{citizen.id.name} {citizen.id.value}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{citizen.name.first} {citizen.name.last}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>{citizen.gender}</td>
      </tr>
      <tr>
        <td>Nationality</td>
        <td>{citizen.nat}</td>
      </tr>
      <tr>
        <td>Date of birth</td>
        <td>{moment(citizen.dob.date).format('Y-MM-DD')} ({citizen.dob.age} Years)</td>
      </tr>
      </tbody>
    </Table>
  );
}

function CitizenLocationInfo(props: { citizen: Citizen }) {
  const { citizen } = props;
  return (
    <>
      <h5>Location</h5>
      <Table striped hover>
        <tbody>
        <tr>
          <td>Street</td>
          <td>{citizen.location.street.number}/{citizen.location.street.name}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{citizen.location.city}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{citizen.location.state}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{citizen.location.country}</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>{citizen.location.postcode}</td>
        </tr>
        <tr>
          <td>Coordinates</td>
          <td>
            {citizen.location.coordinates.latitude} / {citizen.location.coordinates.longitude}
            <a
              rel='noreferrer'
              target='_blank'
              href={`https://www.google.com/maps/search/?api=1&query=${citizen.location.coordinates.latitude},${citizen.location.coordinates.longitude}`}>
              <FaMapPin />
            </a>
          </td>
        </tr>
        <tr>
          <td>Timezone</td>
          <td>{citizen.location.timezone.offset} / {citizen.location.timezone.description}</td>
        </tr>
        </tbody>
      </Table>
    </>
  );
}
