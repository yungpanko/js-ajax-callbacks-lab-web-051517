class Repository {
  constructor(object) {
    this.name = object.name
    this.description = object.description
    this.URL = object.html_url
    this.login = object.owner.login
    this.avatar = object.owner.avatar_url
    this.profilePage = object.owner.html_url

  }
}
