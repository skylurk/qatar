import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 
class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;
 
        return (
            <div>
                <h2 className='text-xl'>Results</h2>
                <h4 className='text-2xl font-semibold'>Your score: {score}</h4>
                <Link to='/selection' type="button" className="focus:outline-none text-center text-white w-2/3 mt-4 bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Thanks
                </Link>
            </div>
        );
    }
}
 
export default Score;