function User() {
    this.getFullName = function() {
        return firstName + ' ' + surName;
    }
    var firstName, surName;
    this.setFirstName = function(name) {
        firstName = name;
    }
    this.setSurname = function (name) {
        surName = name;
    }
}
    var user = new User();
    user.setFirstName("Петя");
    user.setSurname("Иванов");

    console.log( user.getFullName() ); // Петя Иванов
