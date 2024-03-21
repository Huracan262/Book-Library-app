import './Filter.css'

function Filter() {
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input type="text" placeholder="Введите значение для фильтра..." />
      </div>
    </div>
  )
}

export default Filter