import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  return (
    <div className="card" style={{
      // Aplicando um estilo condicional inline: 
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#FFF',
      color: reverse ? '#FFF' : '#000'
    }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  // Quando passamos children dentro de um componente, é interpretado como uma prop
  // E seu tipo é node
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card