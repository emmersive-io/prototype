Meteor.startup(function () {
  
  if (Skills.find().count() === 0) {

    var skills = ["Ruby", "Java", "Python", "JavaScript", "Angular", "Bootstrap", "jQuery", "Responsive Design",
      "React", "iOS", "Android", "UX", "UI", "Postgres", "DB", "DevOps", "Elixir", "Project Manager", "Developer",
      "Web Design", "Computer Vision", "OpenCV", "Spring", "D3", "Swift", "Phoneix", "AWS", "Cloud Computing",
      "Photoshop", "Balsamiq", "Agile", "Scrum Master", "Tech Writing", "IT Support", "DBA", "Functional Programming",
      "CSS", "LESS", "SASS", "SaaS", "Rails", "C", "C++"];

    while (skills.length > 0) {
      Skills.insert({text: skills.pop()});
    }
    console.log('Added Skills');
  }

});
