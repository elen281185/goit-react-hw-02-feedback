import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './Feedback.styled';
import { nanoid } from 'nanoid'

export const Feedback =({options, onLeaveFeedback}) => {
    return (
       
        <FeedbackButtons>
            {options.map(option =>{
                return <Button onClick={()=>
                     onLeaveFeedback(option)} key={nanoid()} >{option}</Button>
            })}
            
        </FeedbackButtons>)};
        Feedback.propTypes = {
            options: PropTypes.array.isRequired,
            onLeaveFeedback: PropTypes.func.isRequired,
        }