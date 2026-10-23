export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let courseName = "Web Development";
  let courseCredits = 4;
  let isCourseName = typeof courseName;
  let isCourseCredits = typeof courseCredits;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      courseName = {courseName}                   <br />
      courseCredits = {courseCredits}             <br />
      isCourseName = {isCourseName}               <br />
      isCourseCredits = {isCourseCredits}         <br />
      sampleCount = {sampleCount}                 <br />
      sampleLabel = {sampleLabel}                 <br />
      isSampleCount = {isSampleCount}             <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
