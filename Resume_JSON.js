let resumeJSON = {
    "Bacic Details" : { "Name":"Rajagopal T",
                        "Mobile":"(+91) 6383837661",
                        "E-mail ID" : "trajagopal37@gmail.com" },

    "Technical Skills":["HTML","CSS","Bootstrap","JavaScript","MongoDB",
                        "React","NodeJS","ExpressJS","AWS"],

    "Other Skills":["MS-Office","AutoCAD","SolidWorks","SolidEdge"],

    "Educational Qualification" : [  
        {   "UG":       {   "Gegree" : "Bachelor of Engineering",
                            "Department": "Mechanical Engineering",
                            "CGPA": "7.58",
                            "Percentage": "75.8%",
                            "Year of Passing": "2018",
                            "College Name":"Einstein College of Engineering",
                            "UG College City":"Tirunelveli"} },

        {   "Diploma" : {   "Course" : "Diploma in Mechanical Engineering",
                            "Percentage": "79.1%",
                            "Year of Passing": "2013",
                            "College Name":"Government Polytechnic College",
                            "College City":"Ooty"} },

        {   "HSC":      {   "Percentage": "77.5%",
                            "Year of Passing": "2011",
                            "School Name":"N C Hr Sec School",
                            "School City":"Tirunelveli"}},
                            
        {   "SSLC":     {   "Percentage": "84.6%",
                            "Year of Passing": "2009",
                            "School Name":"N C Hr Sec School",
                            "School City":"Tirunelveli"}}
        ],

    "Exprience":[{ "company":"Ganesan Builers Ltd",
                    "Designation":"Planning and Maintenance Officer",
                    "Duration":"3 years" },

                { "company":"RDC Concrete Pvt Ltd",
                "Designation":"Production Officer",
                "Duration":"2 years" },

                { "company":"Wheels India Pvt Ltd",
                    "Designation":"Technician",
                    "Duration":"1 year" },

                { "company":"lucas TVS Pvt ltd",
                    "Designation":"Apperentice Technician",
                    "Duration":"1 year" }],
               
    "Strength": ["Strong Interpersonal and Communication skills", 
                "Ability to work in a team with diverse backgrounds", 
                "Willing to learn and adapt to new opportunities and challenges", "Always having a Positive attitude" , "Punctuality" ],
 

    "Hobbies" : ["Cricket","Bike Riding"],

    "Personal Information":
        {
            "Father's Name": "Mr. Thangamariappan c",
            "Date of Birth": "13-07-1994",
            "Gender":"Male",
            "Qualification":"Bachelor of Engineering",
            "District":"Tenkasi",
            "State":"Tamilnadu",
            "Marital Status":"Single",
            "Languages Known" : ["Tamil","English","Hindi"]
        }    
}

console.log(resumeJSON);
document.getElementById("01").innerHTML = JSON.stringify(resumeJSON);


for(let i=0; i<Object.keys(resumeJSON).length;i++) {
    let key = Object.keys(resumeJSON)[i];
    console.log(`Category: ${i+1}.${key}`);

    if(Array.isArray(resumeJSON[key])) {
        for(j=0; j<resumeJSON[key].length; j++) {
            console.log(j+1,resumeJSON[key][j]);
        }
    }else if(typeof resumeJSON[key] === 'object') {
        for(let k=0; k<Object.keys(resumeJSON[key]).length; k++ ) {
            let innerKey = Object.keys(resumeJSON[key])[k];
            console.log(k+1,innerKey + ": " + resumeJSON[key][innerKey]);
        }
    }
    else if (Array.isArray(resumeJSON[key][innerKey])) {
        for (let l=0; l<resumeJSON[key][innerKey].length;l++){
            console.log(resumeJSON[key][innerKey][l])
        }
    }
}


for ( let key in resumeJSON ){
    console.log("For in loop:",key,resumeJSON[key])
}


for (const [key, value] of Object.entries(resumeJSON)) {
    console.log(`for of loop : ${key}: ${value}`);
  }

  let resumeArray = Object.entries(resumeJSON);
  resumeArray.forEach(item => {
      let category = item[0];
      let value = item[1];
  
      console.log("Category:", category);
  
      if (Array.isArray(value)) {
          value.forEach((subItem, index) => {
              console.log("Item", index + 1, ": ", subItem);
          });
      } else if (typeof value === 'object') {
          for (let key in value) {
              console.log(key + ": " + value[key]);
          }
      } else {
          console.log(value);
      }
  });





