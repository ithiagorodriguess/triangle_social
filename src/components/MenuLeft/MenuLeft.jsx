import './MenuLeft.css'

export default function MenuLeft(props) {
  return(
      <div className="MenuLeft--container">
          <div className="menu">
            <div>
                <span className='titleMenu'>Menu</span>
            </div>
            <div className='titleItem'>
                <span>Inicio</span>
            </div>
            <div className='titleItem'>
                <span>Conversas</span>
            </div>
            <div className='titleItem'>
                <span>Amigos</span>
            </div>
            <div className='titleItem'>
                <span>Eventos</span>
            </div>
            <div className='titleItem'>
                <span>Fotos</span>
            </div>
            <div className='titleItem'>
                <span>Arquivos</span>
            </div>
          </div>

      </div>
  )
}