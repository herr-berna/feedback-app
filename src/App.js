import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {

  // Definição de state a nível global
  const [feedback, setFeedback] = useState(FeedbackData)

  // Faremos um componente que irá conter todos os itens da lista
  // Iremos mapear/iterar pelo FeedbackData[] e criar um FeedbackItem para cada um.

  return (
    <>
      <Header text='Feedback App' />
      <div className="container">
        <h1>Meu app</h1>
        <FeedbackList feedback={feedback} />
      </div>

    </>
  )
}

export default App