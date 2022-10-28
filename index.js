window.onload = function () {
  let numberOfTeams;
};

const addNewTeamMember = function () {
  //targeting the member input element
  const memberInputElement = document.querySelector(".add-member-input");

  //targeting member list section
  const memberListElement = document.querySelector(".member-list-section");

  //creating new member
  const newMemberElement = document.createElement("div");

  //assigning the input value to new div
  newMemberElement.innerText = memberInputElement.value;

  //adding class name
  newMemberElement.classList.add("new-member");

  //adding to new member div to member list section
  memberListElement.appendChild(newMemberElement);

  memberInputElement.value = "";
};

const decreaseNumberOfTeams = function () {
  const numberOfTeamsElement = document.querySelector(".number-of-teams");
  numberOfTeams = numberOfTeamsElement.innerText;
  if (numberOfTeams > 2) {
    numberOfTeams--;
    numberOfTeamsElement.innerText = numberOfTeams;
    console.log(numberOfTeams);
  } else {
    alert("Teams must be 2 or more people!");
  }
};
