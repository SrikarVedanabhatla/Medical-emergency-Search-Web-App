const emergencyDetails = {
  'heart_attack': {
      emergencyType: 'Heart Attack',
      severity: 'High',
      symptoms: 'Chest pain, shortness of breath, nausea',
      immediateAction: 'Call emergency services immediately. Administer CPR if trained.',
      relatedSOP: 'sop documents/SOP-2.2-Managing-Myocardial-Infarction-2019.pdf'
  },
  'stroke': {
    emergencyType: 'Stroke',
    severity: 'High',
    symptoms: 'Facial drooping, arm weakness, slurred speech',
    immediateAction: 'Call emergency services immediately. Keep the person calm and reassured.',
    relatedSOP: 'sop documents/nov-2017-ems-ce-neuro-and-sop-update-pdf-3.pdf'
},
'diabetic_emergency': {
  emergencyType: 'Diabetic Emergency',
  severity: 'Moderate',
  symptoms: 'Excessive thirst, frequent urination, confusion',
  immediateAction: 'Give sugar if conscious. Call emergency services if symptoms worsen.',
  relatedSOP: 'sop documents/2.1.24_Diabetic_Emergencies.pdf'
},
'allergic_reaction': {
  emergencyType: 'Allergic Reaction',
  severity: 'Moderate to High',
  symptoms: 'Hives, itching, swelling, difficulty breathing',
  immediateAction: 'Administer epinephrine if available. Call emergency services immediately.',
  relatedSOP: 'sop documents/SOP_Allergen Control.pdf'
  
},
'asthma_attack': {
  emergencyType: 'Asthma Attack',
  severity: 'Moderate to High',
  symptoms: 'Shortness of breath, wheezing, chest tightness',
  immediateAction: 'Administer inhaler if available. Seek medical help if symptoms do not improve.',
  relatedSOP: 'sop documents/Asthma SOP.pdf'
},
'seizure': {
  emergencyType: 'Seizure',
  severity: 'High',
  symptoms: 'Uncontrollable shaking, loss of consciousness, confusion',
  immediateAction: 'Protect the person from injury. Time the seizure. Seek medical help if it lasts longer than 5 minutes.',
  relatedSOP: 'sop documents/seizure_sop.pdf'
},
'choking': {
  emergencyType: 'Choking',
  severity: 'High',
  symptoms: 'Inability to speak or cough, clutching throat',
  immediateAction: 'Perform Heimlich maneuver. Call emergency services if choking persists.',
  relatedSOP: 'sop documents/choking_sop.pdf'
},
'burns': {
  emergencyType: 'Burns',
  severity: 'Moderate to High',
  symptoms: 'Redness, blisters, severe pain',
  immediateAction: 'Cool the burn with cool (not cold) water for at least 10 minutes. Cover with a clean cloth. Seek medical attention if necessary.',
  relatedSOP: 'sop documents/burns_sop.pdf'
},
'heat_stroke': {
  emergencyType: 'Heat Stroke',
  severity: 'High',
  symptoms: 'High body temperature, hot, dry skin, confusion',
  immediateAction: 'Move the person to a cooler place. Apply cool, wet cloths to the body. Seek medical help immediately.',
  relatedSOP: 'sop documents/heat_stroke_sop.pdf'
},
'hypothermia': {
  emergencyType: 'Hypothermia',
  severity: 'Moderate to High',
  symptoms: 'Shivering, confusion, slowed breathing',
  immediateAction: 'Move the person to a warm place. Remove wet clothing. Wrap in blankets or warm clothes. Seek medical help if necessary.',
  relatedSOP: 'sop documents/hypothermia_sop.pdf'
},
'poisoning': {
  emergencyType: 'Poisoning',
  severity: 'Moderate to High',
  symptoms: 'Nausea, vomiting, abdominal pain, dizziness',
  immediateAction: 'Call Poison Control immediately. Follow their instructions carefully.',
  relatedSOP: 'sop documents/poisoning_sop.pdf'
},
'drowning': {
  emergencyType: 'Drowning',
  severity: 'High',
  symptoms: 'Difficulty breathing, unconsciousness',
  immediateAction: 'Remove from water immediately. Check airway and breathing. Perform CPR if necessary. Seek medical help immediately.',
  relatedSOP: 'sop documents/drowning_sop.pdf'
},
'broken_bones': {
  emergencyType: 'Broken Bones',
  severity: 'Moderate to High',
  symptoms: 'Swelling, deformity, severe pain',
  immediateAction: 'Immobilize the injured area. Apply ice if available. Seek medical help immediately.',
  relatedSOP: 'sop documents/broken_bones_sop.pdf'
},
'head_injury': {
  emergencyType: 'Head Injury',
  severity: 'Moderate to High',
  symptoms: 'Loss of consciousness, confusion, headache',
  immediateAction: 'Keep the person still. Apply a cold compress to the head. Seek medical help immediately.',
  relatedSOP: 'sop documents/head_injury_sop.pdf'
},
'electric_shock': {
  emergencyType: 'Electric Shock',
  severity: 'High',
  symptoms: 'Muscle pain, burns, difficulty breathing',
  immediateAction: 'Ensure safety from electric source. Perform CPR if necessary. Seek medical help immediately.',
  relatedSOP: 'sop documents/electric_shock_sop.pdf'
}// Add more emergency details...
};

function displayEmergencyDetails() {
  const selectedEmergency = document.getElementById('emergencyDropdown').value;
  const details = emergencyDetails[selectedEmergency];
  const detailsContainer = document.getElementById('emergencyDetails');
  const container = document.querySelector('.container');

  if (details) {
      let bgColor;
      switch (details.severity) {
          case 'High':
              bgColor = 'red-bg';
              break;
          case 'Moderate':
              bgColor = 'yellow-bg';
              break;
          default:
              bgColor = 'brown-bg';
      }
      container.className = `container ${bgColor}`;

      let tableContent = `
          <table>
              <tr>
                  <td>Emergency Type:</td>
                  <td>${details.emergencyType}</td>
              </tr>
              <tr>
                  <td>Severity:</td>
                  <td>${details.severity}</td>
              </tr>
              <tr>
                  <td>Symptoms:</td>
                  <td>${details.symptoms}</td>
              </tr>
              <tr>
                  <td>Immediate Action Needed:</td>
                  <td>${details.immediateAction}</td>
              </tr>
              <tr>
                  <td>Related SOP:</td>
                  <td><a href="${details.relatedSOP}" target="_blank">Link</a></td>
              </tr>
          </table>
      `;
      detailsContainer.innerHTML = tableContent;
  } else {
      detailsContainer.innerHTML = `<p>No details found for the selected emergency.</p>`;
  }
}

function filterEmergencies() {
  const input = document.getElementById("emergencyInput").value.toUpperCase();
  const detailsContainer = document.getElementById('emergencyDetails');
  let filteredEmergencies = '';

  for (const emergencyKey in emergencyDetails) {
      const emergency = emergencyDetails[emergencyKey];
      const symptoms = emergency.symptoms.toUpperCase();
      
      if (symptoms.includes(input)) {
          let bgColor;
          switch (emergency.severity) {
              case 'High':
                  bgColor = 'red-bg';
                  break;
              case 'Moderate':
                  bgColor = 'yellow-bg';
                  break;
              default:
                  bgColor = 'brown-bg';
          }
          filteredEmergencies += `
              <div class="container ${bgColor}">
                  <h3>${emergency.emergencyType}</h3>
                  <table>
                      <tr>
                          <td>Severity:</td>
                          <td>${emergency.severity}</td>
                      </tr>
                      <tr>
                          <td>Symptoms:</td>
                          <td>${emergency.symptoms}</td>
                      </tr>
                      <tr>
                          <td>Immediate Action Needed:</td>
                          <td>${emergency.immediateAction}</td>
                      </tr>
                      <tr>
                          <td>Related SOP:</td>
                          <td><a href="${emergency.relatedSOP}" target="_blank">Link</a></td>
                      </tr>
                  </table>
              </div>
          `;
      }
  }

  if (filteredEmergencies !== '') {
      detailsContainer.innerHTML = filteredEmergencies;
  } else {
      detailsContainer.innerHTML = `<p>No emergencies found for the given symptom.</p>`;
  }
}
