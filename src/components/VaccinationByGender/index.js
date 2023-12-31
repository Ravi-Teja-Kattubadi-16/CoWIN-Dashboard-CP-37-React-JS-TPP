// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-by-gender-heading"> Vaccination by gender </h1>

      <PieChart width={1200} height={250}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderDetails}
          dataKey="count"
          startAngle={0}
          endAngle={180}
          innerRadius="38%"
          outerRadius="78%"
        >
          {' '}
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
