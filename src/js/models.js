var attr = DS.attr
var hasMany = DS.hasMany

App.ApplicationAdapter = DS.FixtureAdapter
// DS.RestAdapater


App.Volunteer = DS.Model.extend({
  name: attr('string'),
  email: attr('string'),
  causes: attr('string'),
  skills: attr('string'),
  location: attr('string'),
  image: attr('string'),
  lat: attr('number'),
  long: attr('number'),
});

App.Opportunity = DS.Model.extend({
  title: attr('string'),
  orgName: attr('string'),
  orgURL: attr('string'),
  email: attr('string'),
  location: attr('string'),
  lat: attr('number'),
  long: attr('number'),
  description: attr('string'),
  commitment: attr('string'),
  causes: attr('string'),
  skills: attr('string')
});

App.Volunteer.FIXTURES = [
  {
    id: 1,
    name: 'Gabriel',
    email: 'g@briel.ca',
    causes: 'this,that, the other',
    skills: 'stuff, numb-chux',
    location: 'San Francisco',
    image: 'http://lorempixel.com/200/200/people/',
    lat: 98,
    long: 23,
  },
  {
    id: 2,
    name: 'Nick Wargnier',
    email: 'nick@nick.com',
    causes: 'Help change the world',
    skills: 'ruby, rails, java, javascript',
    location: 'San Francisco',
    image: 'http://lorempixel.com/200/200/people/',
    lat: 98,
    long: 23,
  },
  {
    id: 3,
    name: 'Ari Savant',
    email: 'ari@ari.com',
    causes: 'Do great things',
    skills: 'ruby, rails, java, javascript',
    location: 'San Francisco',
    image: 'http://lorempixel.com/200/200/people/',
    lat: 98,
    long: 23,
  }
]

App.Opportunity.FIXTURES = [
  {
    id: 1,
    title: 'op 1',
    orgName: 'org 1',
    orgURL: 'org url 1',
    email: 'joe@org1.org',
    location: 'San Francisco, CA',
    lat: 73,
    long: 49,
    description: 'desc',
    commitment: 'your whole life. forever.',
    causes: 'this, that, the, other',
    skills: 'finance'
  }
];
