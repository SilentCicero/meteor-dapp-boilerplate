/**
Template Controllers

@module Templates
*/

/**
A template component.

@class [template] components_component
@constructor
*/

Template['components_component'].created = function(){
};

Template['components_component'].rendered = function(){
};


Template['components_component'].helpers({
    /**
    This is an example helper method.

    @method (method)
    @param {String} varName     The param description
    @return {String} The return description.
    */
    
    'method': function(){
    },
});

Template['components_component'].events({
    /**
    This is an example event.

    @event (click #someElement)
    @param {Object} event           The event object
    @param {Object} template        The template object
    */
    
    'click #someElement': function(event, template){
    },
});