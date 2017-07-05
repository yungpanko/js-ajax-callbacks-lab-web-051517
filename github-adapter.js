const access_token = "734fb33758188d63f51fca6be46febc600398e6e"

function searchRepositories(searchTerms, displayResults) {
  $.get('https://api.github.com/search/repositories?q=' + searchTerms + '&access_token=' + access_token, function (data, status, response) {
    displayResults(data)
  }).fail(error => {
    displayError()
  })
}

function returnCommits(repository, showCommits) {
  debugger
  $.get('https://api.github.com/repos/' + repository.login + '/' + repository.name + '&access_token=' + access_token, function (data, status, response) {
    showCommits(data)
  }).fail(error => {
    displayError()
  })
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
