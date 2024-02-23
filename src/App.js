import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TravelDetails from './components/TravelDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {travelData: {}, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()
    console.log(jsonData)
    const updatedData = jsonData.packages.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      imageUrl: item.image_url,
    }))
    this.setState({travelData: updatedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    return (
      <div>
        <h1>Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {travelData.map(item => (
              <TravelDetails travelDetails={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
