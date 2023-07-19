// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  //   console.log(vaccinationCoverageDetails)

  const DataFormatter = number => `${number.toString()}k`

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading"> Vaccination Coverage </h1>

      <BarChart
        data={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
        width={1200}
        height={450}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill=" #5a8dee"
          barSize="40%"
          className="bar-class"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill=" #f54394"
          barSize="40%"
          className="bar-class"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
