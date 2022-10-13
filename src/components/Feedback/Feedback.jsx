import React, { Component } from "react";

 class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage:0,    
    }
    
     handleStatisticButton = (e) => {
         const buttonName = e.target.name;
         this.setState(prevState => {
             return {
                 [buttonName]: prevState[buttonName] + 1
             }
         })
         this.countTotalFeedback();
         this.countPositiveFeedbackPercentage()
     };

     countTotalFeedback() { 
        this.setState(prevState => {
             return { total: prevState.good + prevState.neutral + prevState.bad }
         });
     };

     countPositiveFeedbackPercentage() {
        this.setState(({good, neutral, bad}) => {
             return { positivePercentage: Math.round( good/(good + neutral + bad)*100) }
         });
     };
     
    render() {
        return (<div className="Container">
            <h1>Please leave feedback</h1>
            <button type="button" name="good" onClick={this.handleStatisticButton}>Good</button>
            <button type="button" name="neutral" onClick={this.handleStatisticButton}>Neutral</button>
            <button type="button" name="bad" onClick={this.handleStatisticButton}>Bad</button>
            <h2>Statistic</h2>
            <p>Good: {this.state.good }</p>
            <p>Neutral: {this.state.neutral }</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: { this.state.total}</p>
            <p>Positive feedback: {this.state.positivePercentage} %</p>
        </div>)
    }
}

export default Feedback;

