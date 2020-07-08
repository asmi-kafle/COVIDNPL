import React, { useState } from "react";
import Survey from "./SurveyBot";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const SurveyForm = props => {
  const submissionSuccessMessage = "Thank you for sharing your information";
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    toTop();
  }, []);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div class="container-fluid container">
      <div class="topContainer">
        
      </div>

      {isComplete ? (
        <ContactForm
          callback={props.callback}
          message={submissionSuccessMessage}
          dataCallback={props.submissionCallback}
          currentData={props.currentData}
          submittedCallback={props.submittedCallback}
        />
      ) : (
        <div>
         
          <div class="container SurveyForm">
            <Survey callback={setComplete} dataCallback={props.dataCallback} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
