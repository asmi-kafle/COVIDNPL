import React from "react";
import Botui from "../customizedModules/botui-react/lib";
import { editData } from "../service/firebase";

import "../App.css";
var data = {
  symptoms: {
    flu: [],
    breathing: [],
    preexisting: [],
    exposure: [],
    progress: [],
  },
  contact: [],
};

class App extends React.Component {
  tierOneButtons = [
    {
      value: "dry_cough",
      text: "Dry Cough",
      cssClass: null,
    },
    {
      value: "loss_of_smell",
      text: "Loss of Smell",
      cssClass: null,
    },
    {
      value: "sore_throat",
      text: "Sore Throat",
      cssClass: null,
    },
    {
      value: "none",
      text: "None of the Above",
      cssClass: "noneButton",
    },
    {
      value: "done",
      text: "Done",
      cssClass: "doneButton",
    },
  ];

  tier2Buttons = [
    {
      value: "chest_pain",
      text: "Chest Pain",
      cssClass: null,
    },
    {
      value: "difficulty_breathing",
      text: "Difficulty Breathing",
      cssClass: null,
    },
    {
      value: "dizziness",
      text: "Dizziness",
      cssClass: null,
    },
    {
      value: "weakness",
      text: "Weakness",
      cssClass: null,
    },

    {
      value: "none",
      text: "None of the Above",
      cssClass: "noneButton",
    },
    {
      value: "done",
      text: "Done",
      cssClass: "doneButton",
    },
  ];

  preexistingConditionsButtons = [
    {
      value: "diabetes",
      text: "Diabetes",
      cssClass: null,
    },
    {
      value: "heart_disease",
      text: "Heart Disease",
      cssClass: null,
    },
    {
      value: "high_blood_pressure",
      text: "High Blood Pressure",
      cssClass: null,
    },
    {
      value: "kidney_disease",
      text: "Kidney Disease",
      cssClass: null,
    },
    {
      value: "lung_disease",
      text: "Lung Disease",
      cssClass: null,
    },
    {
      value: "reduced_immunity",
      text: "Reduced Immunity",
      cssClass: null,
    },
    {
      value: "stroke",
      text: "Stroke",
      cssClass: null,
    },
    {
      value: "none",
      text: "None of the Above",
      cssClass: "noneButton",
    },
    {
      value: "done",
      text: "Done",
      cssClass: "doneButton",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      test: "data",
      actions: [],
    };
  }

  init() {
    this.botui.message
      .bot({
        content:
          "Hi! I am sorry to hear you are unwell. Please tell us how you are doing so we can all beat this coronavirus together!",
        delay: 1000,
      })
      .then(() => {
        this.botui.message
          .bot({
            content: "Please select your gender",
            delay: 500,
          })
          .then(() => {
            this.botui.action
              .button({
                delay: 500,
                action: [
                  {
                    value: "male",
                    text: "Male",
                  },
                  {
                    value: "female",
                    text: "Female",
                  },
                  {
                    value: "other",
                    text: "Other",
                  },
                ],
              })
              .then((res) => {
                data.gender = res.value;
                this.botui.message
                  .bot({
                    content: "How old are you?",
                    delay: 500,
                  })
                  .then(() =>
                    this.botui.action
                      .text({
                        action: {
                          sub_type: "number",
                          placeholder: "Enter your age",
                        },
                        delay: 500,
                      })
                      .then((res) => {
                        data.age = res.value;
                        this.botui.message
                          .bot({
                            content: "Do you currently have a fever?",
                            delay: 500,
                          })
                          .then(() => {
                            this.botui.action
                              .button({
                                delay: 500,
                                action: [
                                  {
                                    value: true,
                                    text: "Yes",
                                  },
                                  {
                                    value: false,
                                    text: "No",
                                  },
                                ],
                              })
                              .then((res) => {
                                if (res.value === false) {
                                  this.continueToSymptoms();
                                } else {
                                  this.botui.message.bot({
                                    content:
                                      "Please let us know your current body tempreature in °F",
                                    delay: 500,
                                  });
                                  this.botui.action
                                    .button({
                                      delay: 500,
                                      action: [
                                        {
                                          text: "Normal (96 °F - 98.6 °F)",
                                          value: "normal",
                                        },
                                        {
                                          text: "Fever (98.6 °F - 102 °F)",
                                          value: "high",
                                        },
                                        {
                                          text: "High Fever (>102 °F)",
                                          value: "very_high",
                                        },
                                        {
                                          text: "Don't know",
                                          value: "unknown",
                                        },
                                      ],
                                    })
                                    .then((res) => {
                                      data.symptoms.fever = [res.value];

                                      this.continueToSymptoms();
                                    });
                                }
                              });
                          });
                      })
                  );
              });
          });
      });
  }

  continueToSymptoms() {
    this.botui.message
      .bot({
        content:
          "Are you experiencing any of the symptoms below (Mark all those applicable)",
        delay: 1000,
      })
      .then(() => {
        this.renderButtons(this.tierOneButtons, data.symptoms.flu, () => {
          this.tier2Symptoms();
        });
      });
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    editData(data, this.props.dataCallback);
  }

  updateButtons(data) {
    this.setState({ actions: data.output });
  }

  findAndGenerateButtons(ref) {
    var output = [];
    var currentState = this.state.actions;

    output = currentState.map((item) => {
      if (item.value === ref.value) {
        return {
          value: ref.value,
          text: ref.text,
          cssClass: ref.cssClass === "buttonPressed" ? null : "buttonPressed",
        };
      } else {
        if (item.value === "done") {
          return {
            value: item.value,
            text: item.text,
            cssClass:
              ref.cssClass === "doneButtonActive" ? null : "doneButtonActive",
          };
        } else if (item.value === "none") {
          return {
            value: item.value,
            text: item.text,
            cssClass:
              ref.cssClass === "noneButton" ? "doneButton" : "noneButton",
          };
        }

        return item;
      }
    });

    return { output, ref };
  }

  clearStateActions() {
    this.setState({
      ...this.state,
      actions: [],
    });
  }
  renderSelectedOptions(array, callback) {
    var currentActions = this.state.actions;
    var output = currentActions.filter(
      (item) => item.cssClass === "buttonPressed" && item.value !== "done"
    );

    var chosenOptions = output.map((item) => {
      array.push(item.value);

      return {
        content: item.text,
        delay: 200,
        cssClass: "chosenOption",
      };
    });

    this.botui.message.bot({ content: "You selected the following:" }).then(
      chosenOptions.map((item) => {
        this.botui.message.human(item);
      })
    );
    this.clearStateActions();
    callback();
  }
  renderOptions(dataLocation, callback) {
    this.botui.action
      .button({
        autoHide: true,
        addMessage: false,
        action: this.state.actions,
      })
      .then((ref) => {
        var array = this.findAndGenerateButtons(ref);
        this.updateButtons(array);
        if (ref.value === "done") {
          this.renderSelectedOptions(dataLocation, callback);
        } else if (ref.value === "none") {
          this.botui.message
            .bot({ content: "You selected the following:", delay: 500 })
            .then(() => {
              this.botui.message.human({ content: "None", delay: 500 });
              callback();
            });
        } else {
          this.renderOptions(dataLocation, callback);
        }
      });
  }

  renderButtons(buttons, dataLocation, callback) {
    this.setState(
      {
        ...this.state,
        delay: 1500,
        actions: buttons,
      },
      () => {
        this.renderOptions(dataLocation, callback);
      }
    );
  }

  currentHealth() {
    this.botui.message
      .bot({
        content: "How are you feeling today?",
        delay: 1000,
      })
      .then(() => {
        this.botui.action
          .button({
            delay: 500,
            action: [
              {
                id: 4,
                value: "improved",
                text: "I feel better!",
              },
              {
                id: 3,
                value: "no_change",
                text: "No change",
              },
              {
                id: 2,
                value: "worsened",
                text: "I feel worse",
              },
              {
                id: 1,
                value: "worsened",
                text: "Considerably worse!!!",
              },
            ],
          })
          .then((res) => {
            if (res.id > 2) {
              data.symptoms.progress = [res.value];
              this.botui.message
                .bot({
                  content:
                    "Glad to hear its not worse! Thank you for helping fight this nasty virus. Share this with your friends so they can also help kick corona out of Nepal!!",
                  delay: 1000,
                })
                .then(() => {
                  this.finalStep();
                });
            } else {
              data.symptoms.progress.push([res.value]);
              this.botui.message
                .bot({
                  content:
                    "I'm sorry to hear you feel worse! Thank you for helping fight this nasty virus. Share this with your friends so they can also help kick corona out of Nepal!!",
                })
                .then(() => {
                  this.finalStep();
                });
            }
          });
      });
  }

  finalStep() {
    this.botui.action
      .button({
        delay: 500,
        action: [
          {
            id: 1,
            text: "Lets Go!",
          },
        ],
      })

      .then(() => {
        data.complete = true;
        this.props.callback(true);
      });
  }

  contactWithCOVID() {
    this.botui.message
      .bot({
        content:
          "Have you had any exposure to the coronavirus (COVID-19) in the last two months?",
        delay: 1000,
      })
      .then(() => {
        this.botui.action
          .button({
            delay: 200,
            action: [
              {
                text: "No not at all",
                value: null,
              },
              {
                text: "I think so but i am not sure",
                value: "contact_with_symptomatic",
              },
              {
                text: "Yes, with a COVID-19 patient",
                value: "contact_with_COVID",
              },
            ],
          })
          .then((res) => {
            if (res.value !== null) {
              data.symptoms.exposure.push(res.value);
            }
            this.botui.message
              .bot({
                delay: 1000,
                content:
                  "Have you travelled outside of the country in the last two months?",
              })
              .then(() => {
                this.botui.action
                  .button({
                    delay: 300,
                    action: [
                      {
                        text: "No not at all",
                        value: null,
                      },
                      {
                        text: "Yes I have",
                        value: "travel_history",
                      },
                    ],
                  })
                  .then((res) => {
                    if (res.value !== null) {
                      data.symptoms.exposure.push(res.value);

                      this.botui.message
                        .bot({
                          content:
                            "Please list the places you have travelled below (separate with space or comma)",
                        })
                        .then(() => {
                          this.botui.action
                            .text({
                              action: {
                                placeholder: "Enter places visited",
                              },
                            })
                            .then((res) => {
                              data.locationsTravelled = res.value;
                              this.currentHealth();
                            });
                        });
                    } else {
                      this.currentHealth();
                    }
                  });
              });
          });
      });
  }

  tier2Symptoms() {
    this.botui.message
      .bot({
        content:
          "Additionally, are you experiencing any of the symptoms below (mark all those applicable)",
        delay: 1000,
      })
      .then(() => {
        this.renderButtons(this.tier2Buttons, data.symptoms.breathing, () => {
          this.botui.message
            .bot({
              content:
                " Do you have any of the following pre-existing conditions? Mark all that apply",
              delay: 1000,
            })
            .then(() => {
              this.renderButtons(
                this.preexistingConditionsButtons,
                data.symptoms.preexisting,
                () => {
                  this.contactWithCOVID();
                }
              );
            });
        });
      });
  }

  render() {
    return <Botui ref={(cmp) => (this.botui = cmp)} />;
  }
}

export default App;
