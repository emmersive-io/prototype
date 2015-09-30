Meteor.startup(function () {

  if (Projects.find().count() === 0) {
    var projects = [
      {
        name: "Elixir Project", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills_needed: [{"text": "Elixir"}, {"text": "Functional Programming"}, {"text": "Phoenix"}, {"text": "JavaScript"}, {"text": "CSS"}]
      }, 
      {
        name: "Ruby Project", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills_needed: [{"text": "Ruby"}, {"text": "Rails"}, {"text": "DevOps"}, {"text": "DB"}, {"text": "Postgres"}]
      }, 
      {
        name: "Computer Vision", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills_needed: [{"text": "OpenCV"}, {"text": "C"}, {"text": "C++"}]
      },
      {
        name: "Mean Project", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        skills_needed: [{"text": "JavaScript"}, {"text": "Node"}, {"text": "Angular"}, {"text": "Express"}]
      }
    ];

    while (projects.length > 0) {
      Projects.insert(projects.pop());
    }
    console.log('Added Projects');
  }

});
