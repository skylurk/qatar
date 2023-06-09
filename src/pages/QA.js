import React, { Component } from "react";

import Question from "../components/questions/Question";
import QuestionBank from "../components/questions/QuestionBank";
import Score from "../components/questions//Score";
import FormContent from "../components/FormContent";
import { Modal } from "flowbite-react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionBank: QuestionBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      showModal: true,
      phone: "",
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  hideModal = () => {
    this.setState({ showModal: false });
  }

  getPhone = (x) => {
    this.setState({ phone: x });
    console.log("x", x);
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };



  render() {

    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#63003F]">
        <img src="/images/qat.png" alt="" width="200px" />
        <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg">
          <h1 className="app-title font-bold mb-4">QUIZ APP</h1>
          {!quizEnd ? (
            <Question
              question={questionBank[currentQuestion]}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit}
            />
          ) : (
            <Score
              score={score}
              onNextQuestion={this.handleNextQuestion}
              className="score"
            />
          )}
        </div>

        <Modal show={this.state.showModal}>
          <Modal.Header>SPIN & WIN</Modal.Header>
          <Modal.Body>
            <FormContent hideModal={this.hideModal} phoneSet={this.getPhone} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
