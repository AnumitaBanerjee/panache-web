import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const MultiSurvey = () => {
    const questions = [
        {
            questionText: 'I like to work on cars ?',
            answerOptions: [
                { id: 1, answerText: 'Yes', value: 'yes' },
                { id: 2, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to build things ?',
            answerOptions: [
                { id: 3, answerText: 'Yes', value: 'yes' },
                { id: 4, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to take care of animals ?',
            answerOptions: [
                { id: 5, answerText: 'Yes', value: 'yes' },
                { id: 6, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like putting things together or assembling things ?',
            answerOptions: [
                { id: 7, answerText: 'Yes', value: 'yes' },
                { id: 8, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to cook ?',
            answerOptions: [
                { id: 9, answerText: 'Yes', value: 'yes' },
                { id: 10, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I am a practical person ?',
            answerOptions: [
                { id: 11, answerText: 'Yes', value: 'yes' },
                { id: 12, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like working outdoors ?',
            answerOptions: [
                { id: 13, answerText: 'Yes', value: 'yes' },
                { id: 14, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to do puzzles ?',
            answerOptions: [
                { id: 15, answerText: 'Yes', value: 'yes' },
                { id: 16, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to do experiments ?',
            answerOptions: [
                { id: 17, answerText: 'Yes', value: 'yes' },
                { id: 18, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I enjoy trying to figure out how things work ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to analyze things (problems/situations) ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like working with numbers or charts ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I’m good at math ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I am good at working independently ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to read about art and music ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I enjoy creative writing ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I am a creative person ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to play instruments or sing ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like acting in plays ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
        {
            questionText: 'I like to draw ?',
            answerOptions: [
                { id: 19, answerText: 'Yes', value: 'yes' },
                { id: 20, answerText: 'No', value: 'no' },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerArr, setAnswerArr] = useState([]);
    const [now, setNow] = useState(0);

    const handleAnswerOptionClick = (ans) => {
        const nextQuestion = currentQuestion + 1;
        setNow(now + 5)
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    // console.log(answerArr)

    return (
        <>
            <div className="content-panel">
                {/* <ProgressBar now={now} label={`${now}%`} /> */}
                <ProgressBar now={now} />
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    <div className='row'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <div className='col-md-6' key={answerOption.id}>
                                <div className='answer-input'>
                                    <input
                                        type="radio"
                                        id='answer'
                                        name="answer"
                                        value={answerOption.value}
                                        onChange={(e) => {
                                            handleAnswerOptionClick(e.target.value);
                                            setAnswerArr([...answerArr, { answer: e.target.value }])
                                        }} />
                                    <label htmlFor='answer'>{answerOption.answerText}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MultiSurvey;