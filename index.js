window.onload = function () {
  let numberOfTeams = 3;
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

  //TODO: check if the input includes only letters
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
};

const assignMember = function () {
  //get the value of number of teams
  const numberOfTeamsElement = document.querySelector(".number-of-teams");
  numberOfTeams = numberOfTeamsElement.innerText;
  //check if the number of member smaller then number of teams
  if (memberListArray.length >= numberOfTeams) {
    //target the section right to add new team items
    const teamsSection = document.querySelector(".section-right");

    //create new team item
    const teamItem = document.createElement("div");
    teamItem.classList.add("team-item flex-col");

    //create team header (represent "team 1, team 2, ...")
    const teamHeader = document.createElement("div");
    teamHeader.classList.add("team-header");

    //create team box (it holds the member names)
    const teamBox = document.createElement("div");
    teamBox.classList.add("team-box flex-col");

    //create the new team member row
    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");
  } else {
    alert("number of teams can't be bigger than number of members!");
  }
};
