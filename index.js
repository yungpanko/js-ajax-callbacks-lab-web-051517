$(document).ready(function () {
  getRepositories()
  getCommits()
});

function getRepositories() {
  $('#form').on('submit', function (event) {
    let search = $('#search').val();
    search = search.trim().replace(/ /g, "+")
    searchRepositories(search, displayResults)
    event.preventDefault();
  })
}


function displayResults(data) {
  let repositories = data.items
  let displayRepositories = repositories.map((object) => {
    return new Repository(object)
  })
  displayRepositories.forEach((repository, index) => {
    $('#results').append(`<p><a href=${repository.URL}>${repository.name}</a></p>
      <p>${repository.description}</p>
      <p>${repository.login}</p>
      <p><img src="${repository.avatar_url}"></p>
      <p><a href="#" onclick="returnCommits(${repository}, showCommits)">Show Commits</a></p>
      <p><a href=${repository.profilePage}>Link to Profile</a></p>
      <hr>`)
  })

  function showCommits(data) {
    debugger
  }
}
