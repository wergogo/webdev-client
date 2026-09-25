export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Your Form</h4>

      {/* Text Fields */}
      <h5>Text Fields</h5>
      <label htmlFor="wd-your-firstname">First Name:</label>
      <input
        type="text"
        placeholder="Junping"
        defaultValue="Junping"
        id="wd-your-firstname"
      />
      <br />
      <label htmlFor="wd-your-lastname">Last Name:</label>
      <input
        type="text"
        placeholder="Zhu"
        defaultValue="Zhu"
        id="wd-your-lastname"
      />
      <br />
      <label htmlFor="wd-your-studentid">Student ID:</label>
      <input
        type="text"
        placeholder="002055173"
        defaultValue="002055173"
        id="wd-your-studentid"
      />
      <br />

      {/* Textarea */}
      <h5>Bio</h5>
      <label htmlFor="wd-your-bio">Short Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="Graduate student trying to survive the Web Development course."
      />
      <br />

      {/* Radio Buttons */}
      <h5>Class Standing</h5>
      <input type="radio" name="your-class-standing" id="wd-your-radio-freshman" />
      <label htmlFor="wd-your-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-class-standing" id="wd-your-radio-sophomore" />
      <label htmlFor="wd-your-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-class-standing" id="wd-your-radio-junior"/>
      <label htmlFor="wd-your-radio-junior">Junior</label>
      <br />
      <input type="radio" name="your-class-standing" id="wd-your-radio-senior" />
      <label htmlFor="wd-your-radio-senior">Senior</label>
      <br />
      <input type="radio" name="your-class-standing" id="wd-your-radio-graduate" defaultChecked />
      <label htmlFor="wd-your-radio-graduate">Graduate</label>
      <br />

      <h5>Enrollment Status</h5>
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-radio-fulltime"
        defaultChecked
      />
      <label htmlFor="wd-your-radio-fulltime">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-radio-parttime" />
      <label htmlFor="wd-your-radio-parttime">Part-time</label>
      <br />

      {/* Checkboxes */}
      <h5>Programming Languages</h5>
      <input
        type="checkbox"
        name="your-languages"
        id="wd-your-chkbox-python"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-python">Python</label>
      <br />
      <input type="checkbox" name="your-languages" id="wd-your-chkbox-java" />
      <label htmlFor="wd-your-chkbox-java">Java</label>
      <br />
      <input
        type="checkbox"
        name="your-languages"
        id="wd-your-chkbox-cpp"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-cpp">C++</label>
      <br />
      <input type="checkbox" name="your-languages" id="wd-your-chkbox-csharp" />
      <label htmlFor="wd-your-chkbox-csharp">C#</label>
      <br />

      {/* Dropdowns */}
      <h5>Major</h5>
      <label htmlFor="wd-your-select-major">Select your major: </label>
      <br />
      <select id="wd-your-select-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="MATH">Math</option>
      </select>
      <br />

      <h5>Topics to Deepen</h5>
      <label htmlFor="wd-your-select-topics">
        Select topics for this term:{" "}
      </label>
      <br />
      <select
        multiple
        id="wd-your-select-topics"
        defaultValue={["REACT", "API"]}
      >
        <option value="REACT">React &amp; Component Design</option>
        <option value="NODE">Node.js &amp; Express</option>
        <option value="API">RESTful API Development</option>
        <option value="DB">MongoDB &amp; Database Integration</option>
      </select>
      <br />

      {/* Typed Fields */}
      <h5>Other Fields</h5>
      <label htmlFor="wd-your-email">School Email: </label>
      <input
        type="email"
        placeholder="zhu.junp@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-gradyear">Expected Graduation Year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2024}
        max={2032}
        id="wd-your-gradyear"
      />
      <br />
      <label htmlFor="wd-your-startdate">Program Start Date: </label>
      <input
        type="date"
        defaultValue="2025-01-12"
        min="2020-01-01"
        max="2030-12-31"
        id="wd-your-startdate"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        Course Excitement (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="7"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      {/* Buttons */}
      <h5>Actions</h5>
      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
