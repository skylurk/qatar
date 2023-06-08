import { Button, Modal, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  // CREATE STATE
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'qatar' && password === 'airways') {
      navigate('/selection');
    } else {
      setShowModal(true);
    }
  }
  return (
    <div className='bg-[#5C0632] h-screen w-full flex justify-center items-center'>
      <div className="">
        <form onSubmit={handleSubmit} className='bg-white w-[500px] rounded-lg flex flex-col gap-4 text-center p-4'>
          <h2 className='text-3xl font-bold'>SPIN & WIN</h2>
          <div className="w-full flex justify-center">
            <img src="/images/bgw.png" alt="" width={'200px'}/>
          </div>
          <TextInput
            id="username"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            type="text" />

          <TextInput
            id="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password" />

          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </div>

      <Modal
        show={showModal}>
        <Modal.Header>
          Error
        </Modal.Header>
        <Modal.Body>
          <h1>Wrong Credentials</h1>
        </Modal.Body>

        <Modal.Footer>
          <Button 
          onClick={handleClose}
          >
            Retry
          </Button>
          <Button
            color="gray"
            onClick={handleClose}
            
          >
            <span>
              Close
            </span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Welcome