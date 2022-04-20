import PropTypes from 'prop-types'

// Parâmetros do componente funcional são as props
const Header = ({ text, textColor, bgColor }) => {

  // Esse objeto vai pra dentro do attr 'style'
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Plano de Saúde',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95'
}

// PropTypes (impt) verificam o tipo de dado da prop
// Vai esperar um tipo definido
// Quando se usa TypeScript não precisa usar PropTypes.
Header.propTypes = {
  text: PropTypes.string
}

export default Header 