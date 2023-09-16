const url = 'https://fakestoreapi.com/users';

const userContainer = document.querySelector('.user-container');

const applicationSource = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    getUsers(data);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = (items) => {
  let displayUser = items
    .map((user) => {
      return `<p>${user.name.firstname} ${user.name.lastname}</p>`;
    })
    .join('');
  userContainer.innerHTML = displayUser;
};

window.addEventListener('DOMContentLoaded', applicationSource);
