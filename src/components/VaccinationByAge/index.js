// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  console.log(vaccinationByAgeDetails)

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading"> Vaccination by age </h1>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart className="pie-chart-margin">
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAgeDetails}
            dataKey="count"
            startAngle={0}
            endAngle={360}
            outerRadius="78%"
          >
            {' '}
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#94a3b8" />
          </Pie>
          <div className="pie-chart-margin">hello</div>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            className="pie-chart-margin"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
