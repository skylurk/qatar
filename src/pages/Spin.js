import { Button, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import FormContent from '../components/FormContent';

const Spin = () => {

  const [showModal, setShowModal] = useState(true);



  const hideModal = () => {
    setShowModal(false);
  }


  const segments = [
    "Chittagong",
    "Juba",
    "Lucky Winner",
    "Kinshasa",
    "Lyon",
    "Medan",
    "Toulouse",
    "Trabzon",
  ];
  const segColors = [
    "#EDE6E6",
    "#EDE6E6",
    "#5C0632",
    "#EDE6E6",
    "#EDE6E6",
    "#EDE6E6"
  ];

  const onFinished = (winner) => {
    console.log(winner);

    if (winner === 'Lucky Winner') {
      alert('Congratulation! You won the prize')
    } else {
      // alert('Sorry! Try again')
    }
  };


  return (
    <div className='w-full min-h-screen bg-gray-50 flex justify-center'>
      <div className="w-1/2">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="MM"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#5C0632"
          contrastColor="gray"
          buttonText="Start"
          isOnlyOnce={false}
          size={280}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>

      <Modal
        show={showModal}>
        <Modal.Header>
          SPIN & WIN
        </Modal.Header>
        <Modal.Body>
          <FormContent hideModal={hideModal} />
        </Modal.Body>

      </Modal>

    </div>
  )
}

export default Spin