/**
Helper functions

@module Helpers
**/

/**
Global template helpers

@class TemplateHelpers
@constructor
**/

/**
A simple template helper to log objects in the console.

@method (debug)
**/

Template.registerHelper('debug', function(object){
    console.log(object);
});


/**
Formats a timestamp to any format given.

    {{formatTime myTime "YYYY-MM-DD"}}

@method (formatTime)
@param {String} time         The timstamp, can be string or unix format
@param {String} format       the format string, can also be "iso", to format to ISO string, or "fromnow"
//@param {Boolean} realTime    Whether or not this helper should re-run every 10s
@return {String} The formated time
**/

Template.registerHelper('formatTime', Helpers.formatTime);


/**
Formats a number.

    {{formatNumber myNumber "0,0.0[0000]"}}

@method (formatNumber)
@param {String} number
@param {String} format       the format string
@return {String} The formatted number
**/

Template.registerHelper('formatNumber', function(number, format){
    if(format instanceof Spacebars.kw)
        format = null;

    if(number instanceof BigNumber)
        number = number.toNumber();

    format = format || '0,0.0[0000]';


    if(!_.isFinite(number))
        number = numeral().unformat(number);

    if(_.isFinite(number))
        return numeral(number).format(format);
});


/**
Formats a number (the Ether amount in Wei) to a formatted number.

    {{fromWei 1900000000000000000 "ether"}} // formats wei to ether

@method (fromWei)
@param {String|Number} weiAmount           The amount in wei
@param {String} format                     The wei format
@return {String} The formatted wei value in format type (e.g. 'ether')
**/

Template.registerHelper('fromWei', function(weiAmount, format){
    if(_.isUndefined(format))
        format = 'ether';
    
    if(_.isUndefined(weiAmount))
        weiAmount = 0;
    
    return web3.fromWei(weiAmount, format);
});


/**
Capitolize all words in string.

    {{capitolizeAll 'a new set'}} // returns 'A New Set'

@method (capitolizeAll)
@param {String} string     The string to format
@return {String} The formatted string
**/

Template.registerHelper('capitolizeAll', function(string){
    return String(string).ucFirstAllWords();
});


/**
Capitolize first word in string.

    {{capitolize 'a new set'}} // returns 'A new set'

@method (capitolize)
@param {String} string     The string to format
@return {String} The formatted string
**/

Template.registerHelper('capitolize', function(string){
    return String(string).capitalizeFirstLetter();
});


/**
Add HTTP prefix to a url, if it does not exist already.

    {{addhttp "youtube.com"}} // returns "http://youtube.com"

@method (addhttp)
@param {String} url         The raw URL.
@return {String} The formatted url, prefixed with http
**/

Template.registerHelper('addhttp', Helpers.addhttp);


/**
Clean prefix to a url, if it does not exist already.

    {{cleanURL "http://youtube.com"}} //returns "youtube.com"

@method (cleanURL)
@param {String} url         The raw URL.
@return {String} The formatted url, with the prefixed http(s) removed
**/

Template.registerHelper('cleanURL', Helpers.cleanURL);