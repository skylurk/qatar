import { Button, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import FormContent from "../components/FormContent";
import { DatabaseService } from "../context/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Spin = () => {
  const [showModal, setShowModal] = useState(true);
  const [phone, setPhone] = useState("");
  const [lostModal, setLostModal] = useState(false);

  const navigate = useNavigate();

  const hideModal = () => {
    setShowModal(false);
  };

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
    "#EDE6E6",
  ];

  const { updateUser } = DatabaseService();

  const getPhone = (x) => {
    setPhone(x);
    console.log("x", x);
  };

  const onFinished = (winner) => {
    console.log(winner);

    const data = {
      score: winner,
      phone: phone,
    };

    if (winner === "Lucky Winner") {
      navigate("/won");
    } else {
      setLostModal(true);
    }
  };

  const handleClose = () => {
    setLostModal(false);
  };

  console.log("phone", phone);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center">
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

      <Modal show={showModal}>
        <Modal.Header>SPIN & WIN</Modal.Header>
        <Modal.Body>
          <FormContent hideModal={hideModal} phoneSet={getPhone} />
        </Modal.Body>
      </Modal>

      <Modal show={lostModal} onClose={handleClose}>
        <Modal.Header>
          <span className="text-sm">SPIN & WIN</span>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold">
              Oh Snap! Better luck next time
            </h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full">
            <Link
              to="/selection"
              type="submit"
              className="focus:outline-none text-white w-full bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              DONE
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Spin;
