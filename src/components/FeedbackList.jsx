// Agora iremos trazer ao App.js a lista completa, ao invés dos itens individualmente.
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {

  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>
  }
  // Retornar jsx sempre será com parênteses
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}


export default FeedbackList