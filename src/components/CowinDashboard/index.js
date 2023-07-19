// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    last7DaysVaccinationDetailsList: [],
    vaccinationByGenderList: [],
    vaccinationByAgeList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCowinData()
  }

  failureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-description"> Something went wrong </h1>
    </div>
  )

  getCowinData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    if (response.ok === true) {
      const apiData = await response.json()
      const updatedApiData = {
        last7DaysVaccination: apiData.last_7_days_vaccination,
        vaccinationByAge: apiData.vaccination_by_age,
        vaccinationByGender: apiData.vaccination_by_gender,
      }
      const {
        last7DaysVaccination,
        vaccinationByGender,
        vaccinationByAge,
      } = updatedApiData
      const updateLast7DaysDetails = last7DaysVaccination.map(
        eachDayDetails => ({
          vaccineDate: eachDayDetails.vaccine_date,
          dose1: eachDayDetails.dose_1,
          dose2: eachDayDetails.dose_2,
        }),
      )

      const updatedVaccinationByGenderDetails = vaccinationByGender.map(
        eachGender => ({
          count: eachGender.count,
          gender: eachGender.gender,
        }),
      )
      const updatedVaccinationByAgeDetails = vaccinationByAge.map(eachAge => ({
        age: eachAge.age,
        count: eachAge.count,
      }))

      this.setState({
        last7DaysVaccinationDetailsList: updateLast7DaysDetails,
        vaccinationByGenderList: updatedVaccinationByGenderDetails,
        vaccinationByAgeList: updatedVaccinationByAgeDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCoWINDashBoard = () => {
    const {
      last7DaysVaccinationDetailsList,
      vaccinationByGenderList,
      vaccinationByAgeList,
    } = this.state
    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={last7DaysVaccinationDetailsList}
        />{' '}
        <VaccinationByGender
          vaccinationByGenderDetails={vaccinationByGenderList}
        />
        <VaccinationByAge vaccinationByAgeDetails={vaccinationByAgeList} />
      </>
    )
  }

  renderSwitchFunction = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderCoWINDashBoard()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dash-board-container">
        <div className="cowin-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="cowin-main-heading"> Co-WIN </h1>
        </div>
        <h1 className="cowin-vaccination-heading">
          {' '}
          CoWIN Vaccination in India{' '}
        </h1>
        {this.renderSwitchFunction()}
      </div>
    )
  }
}
export default CowinDashboard
