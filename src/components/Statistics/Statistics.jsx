// import React from 'react';
// import App from 'components/App';

export const Statistics = ({good, neutral, bad, total, positivePercentage})=>{
    return (<>
        <p>Good: {good }</p>
        <p>Neutral: {neutral }</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
    </>)
}