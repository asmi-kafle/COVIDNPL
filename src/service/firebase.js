import firebase from "../config";
import MapContainer from "../components/map";

var outputData = {
  symptoms: {
    breathing: {
      chest_pain: false,
      difficulty_breathing: false,
      dizziness: false,
      none: false,
      weakness: false
    },
    exposure: {
      contact_with_covid: false,
      contact_with_symptomatic: false,
      travel_history: false
    },
    fever: {
      high: false,
      normal: false,
      unknown: false,
      very_high: false
    },
    flu: {
      dry_cough: false,
      loss_of_smell: false,
      none: false,
      sore_throat: false
    },
    preexisting: {
      diabetes: false,
      heart_disease: false,
      high_blood_pressure: false,
      kidney_disease: false,
      lung_disease: false,
      none: false,
      reduced_immunity: false,
      stroke: false
    },
    progress: {
      imporved: false,
      no_change: false,
      worsened: false,
      worsened_considerable: false
    }
  },
  address: {
    city: "",
    location: {},
    street: ""
  },
  age: 0,
  contact: {
    email: "",
    phone: ""
  },
  gender: {
    female: false,
    male: false,
    other: false
  },
  risk: {
    high: false,
    low: false,
    very_high: false
  }
};

const sendData = (data, status, dataCallback) => {
  
  //console.log(status)
  if(status){

    //console.log("calling send data with the following data");
    //console.log(data);
  var auth = firebase.auth();
  var db = firebase.firestore();
  loginUser(auth, id => {
    submitSurvey(db, data, dataCallback, id);
    //console.log("callback");
  });
  //console.log("test");
  dataCallback()
  }else{
    //console.log("notsending yet!")
  }
};

export const editData = (data, dataCallback) => {
  //console.log("editing data");
  //console.log(data);
  var keys = Object.keys(data);
  var valuesMain = Object.values(data);
  //console.log(keys);
  keys.forEach((item, index) => {
    // //console.log(typeof(data[item]))
    if (item === "symptoms") {
      // //console.log("these are symptoms")
      var keys = Object.keys(data[item]);
      var values = Object.values(data[item]);
      // //console.log(keys)
      // //console.log(values)
      for (var i = 0; i < keys.length; i++) {
        if (values[i].length === 0) {
          outputData.symptoms[keys[i]].none = true;
          // //console.log("printing output data after insert at : " + toString(i))
          // //console.log(outputData)
        } else {
          // //console.log("not none here: ")
          values[i].forEach(item => {
            outputData.symptoms[keys[i]][item] = true;
          });

          // data.symptoms[keys[i]].none = true;
          // //console.log(i)
        }
      }
      // //console.log(outputData)
    } else if (item === "gender") {
      outputData.gender = valuesMain[index];
    } else if (item === "age") {
      outputData.age = valuesMain[index];
    } else if (item === "locationsTravelled") {
      outputData.locationsTravelled = valuesMain[index];
    } else if (item === "address") {
      //console.log("address field to be edited");
    }
  });
  //console.log(outputData);
  dataCallback(outputData);
};

const submitSurvey = async (db, dataToPush, callback, id) => {
  //console.log("submitting the survey");
  
  dataToPush.originID = id;
  //console.log(dataToPush);
  await db
    .collection("Users")
    .add(dataToPush)
    .then(async ref => {
      var docID = ref.id;
      var locationData = {};
      locationData[docID] = dataToPush.address;
      //console.log("inside submission of location data ")
      //console.log(locationData)
      await db.collection("Users").doc("mapCoord").set(locationData, {merge:true})
    });


  callback();
};

const submitSurveySymptoms = async (db, dataToPush, docID, callback) => {
  //console.log("submitting the survey");

  await db.collection("Users").add(dataToPush);

  callback();
};

const loginUser = async (auth, callback) => {
  //console.log("logging in the user");
  await auth.signInAnonymously();
  //console.log(auth.currentUser.uid);
  callback(auth.currentUser.uid);
};
export default sendData;
