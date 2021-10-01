//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
// Loads all Semantic javascripts
//= require semantic-ui
//= require semantic-ui/dropdown
//= require jquery.turbolinks
//= require turbolinks-compatibility
$(document).on('turbolinks:load', function() {
	$('.ui.dropdown').dropdown();
})
