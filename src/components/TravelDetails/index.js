import './index.css'

const TravelDetails = props => {
  const {travelDetails} = props
  const {imageUrl, name, description} = travelDetails
  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image" />
      <div className="para-and-heading">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelDetails
