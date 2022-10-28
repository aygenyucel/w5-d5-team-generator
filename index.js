window.onload = function () {
  let numberOfTeams;
};

const memberListArray = [];

const addNewTeamMember = function () {
  //targeting the member input element
  const memberInputElement = document.querySelector(".add-member-input");

  //targeting member list section
  const memberListElement = document.querySelector(".member-list");

  //creating new member
  const newMemberElement = document.createElement("div");

  //if input is not empty assign the input value to new div

  if (memberInputElement.value != "") {
    const newMemberName = memberInputElement.value;
    newMemberElement.innerText = newMemberName;

    //adding new member element to memberListarray
    memberListArray.push(newMemberName);
    console.log(memberListArray);

    //adding class name to new member element
    newMemberElement.classList.add("new-member");

    //adding to new member div to member list section
    memberListElement.appendChild(newMemberElement);

    memberInputElement.value = "";
  } else {
    alert("You must type a member name");
  }
};

const decreaseNumberOfTeams = function () {
  const numberOfTeamsElement = document.querySelector(".number-of-teams");
  numberOfTeams = numberOfTeamsElement.innerText;
  if (numberOfTeams > 2) {
    numberOfTeams--;
    numberOfTeamsElement.innerText = numberOfTeams;
  } else {
    alert("Teams must be 2 or more people!");
  }
};

const increaseNumberOfTeams = function () {
  const numberOfTeamsElement = document.querySelector(".number-of-teams");
  numberOfTeams = numberOfTeamsElement.innerText;
  numberOfTeams++;
  numberOfTeamsElement.innerText = numberOfTeams;

  //TODO: check if the number of member smaller then number of teams
};
