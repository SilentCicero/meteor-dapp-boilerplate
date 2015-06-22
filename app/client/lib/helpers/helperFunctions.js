/**
Helper functions

@module Helpers
**/

/**
The Helpers class containing helper functions

@class Helpers
@constructor
**/

Helpers = {};


/**
Reruns functions reactively, based on an interval. Use it like so:

    Helpers.rerun['10s'].tick();

@method (rerun)
**/

Helpers.rerun = {
    '10s': new ReactiveTimer(10)
};


/**
Clear localStorage

@method (getLocalStorageSize)
**/

Helpers.getLocalStorageSize = function(){

    var size = 0;
    if(localStorage) {
        _.each(Object.keys(localStorage), function(key){
            size += localStorage[key].length * 2 / 1024 / 1024;
        });
    }

    return size;
};



/**
Reactive wrapper for the moment package.

@method (moment)
@param {String} time    a date object passed to moment function.
@return {Object} the moment js package
**/

Helpers.moment = function(time){

    // react to language changes as well
    TAPi18n.getLanguage();

    if(_.isFinite(time) && moment.unix(time).isValid())
        return moment.unix(time);
    else
        return moment(time);

};


/**
Formats a timestamp to any format given.

    Helpers.formatTime(myTime, "YYYY-MM-DD")

@method (formatTime)
@param {String} time         The timstamp, can be string or unix format
@param {String} format       the format string, can also be "iso", to format to ISO string, or "fromnow"
@return {String} The formated time
**/

Helpers.formatTime = function(time, format) { //parameters
    
    // make sure not existing values are not Spacebars.kw
    if(format instanceof Spacebars.kw)
        format = null;

    if(time) {

        if(_.isString(format) && !_.isEmpty(format)) {

            if(format.toLowerCase() === 'iso')
                time = Helpers.moment(time).toISOString();
            else if(format.toLowerCase() === 'fromnow') {
                // make reactive updating
                Helpers.rerun['10s'].tick();
                time = Helpers.moment(time).fromNow();
            } else
                time = Helpers.moment(time).format(format);
        }

        return time;

    } else
        return '';
};


/**
Add an http prefix to a url string.

    Helpers.addhttp('youtube.com'); // returns 'http://youtube.com'

@method (addhttp)
@param {String} url         Prefix with http if not already
@return {String} The formatted URL
**/

Helpers.addhttp = function(url){
   if (!/^(f|ht)tps?:\/\//i.test(String(url)))
      url = "http://" + String(url);
   
   return url;
};


/**
Clean up a url for display.

    Helpers.cleanURL('http://youtube.com'); returns 'youtube.com'

@method (cleanURL)
@param {String} url         The raw URL to be parsed
@return {String} The parsed URL
**/

Helpers.cleanURL = function(url){
    return String(url).replace("http://", "").replace("https://", "").replace("www.", "");
};