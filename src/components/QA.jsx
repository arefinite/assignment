import React from 'react';
import {QAStyle} from "../assets/styles/index.js";

const QA = () => {
    return (
        <QAStyle>
            <h1>Question/Answer:</h1>
            <div>
                <div>
                    <h4 style={{marginTop: '1rem'}}>Q1. Props VS State</h4>
                    <p>
                        <strong>Answer:</strong> Here goes the answer
                    </p>
                </div>
                <div>
                    <h4>Q2. How does useState work?</h4>
                    <p>
                        <strong>Answer:</strong> Here goes the answer
                    </p>
                </div>
                <div>
                    <h4>Q3. Purpose of useEffect other than fetching data?</h4>
                    <p>
                        <strong>Answer:</strong> Here goes the answer
                    </p>
                </div>
                <div>
                    <h4>Q2. How does React work?</h4>
                    <p>
                        <strong>Answer:</strong> Here goes the answer
                    </p>
                </div>
            </div>
        </QAStyle>
    );
};

export default QA;