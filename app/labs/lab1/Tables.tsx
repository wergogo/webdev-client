export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React Basics</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">State Management</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Forms</td>
            <td align="center">3/10/21</td>
            <td align="right">89</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">APIs</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Routing</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Accessibility</td>
            <td align="center">3/31/21</td>
            <td align="right">96</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Next.js</td>
            <td align="center">4/7/21</td>
            <td align="right">93</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">91</td>
          </tr>
        </tfoot>
      </table>

      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th align="center">Day</th>
            <th align="center">Activity</th>
            <th align="center">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">Tuesday</td>
            <td>Web Class</td>
            <td align="right">3pm-6pm</td>
          </tr>
          <tr>
            <td align="center">Wednesday</td>
            <td>SQL class</td>
            <td align="right">11pm~1pm</td>
          </tr>
          <tr>
            <td align="center">Friday</td>
            <td>Progress Meeting</td>
            <td align="right">9pm-10pm</td>
          </tr>
          <tr>
            <td align="center">Sunday</td>
            <td>Homework meeting</td>
            <td align="right">8pm-9pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}