const TravelDetails = props => {
  const {travelDetails} = props
  const {imageUrl, name, description} = travelDetails
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default TravelDetails
