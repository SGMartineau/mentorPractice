angular.module('devMtIn').service('profileService', function($http) {
    
    var baseUrl = 'http://connections.devmounta.in/';
    
    this.serviceTest = function () {
        console.log('profileService is connected!');
    }
    this.saveProfile = function(profile) {
        return $http.post(baseUrl + 'api/profiles/', profile).then(function(profileResponse) {
            localStorage.setItem('profileId', JSON.stringify({profileId: profileResponse.data._id}));
        }).catch(function(err) {
            console.error(err);
        })
    }
    this.checkForProfile = function(profileId) {
        return $http.get(baseUrl + 'api/profiles/' + profileId)
    }
    
    this.deleteProfile = function() {
  var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

  return $http({
    method: 'DELETE'
  , url: baseUrl + 'api/profiles/' + profileId
  });
}
});