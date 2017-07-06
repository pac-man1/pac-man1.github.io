/* Custom filtering functions which will search data in column 2 */

//contains
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#has').val();
 regx = "^.*"+input.toUpperCase()+".*";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//does not contain
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#dnc').val();
 regx =  "^(?!.*"+input.toUpperCase()+")";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//startswith
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#startswith').val();
 regx =  "^"+input.toUpperCase()+".*";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//not starts with
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#nstartswith').val();
 regx =  "^(?!"+input.toUpperCase()+").*";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//ends with
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#endswith').val();
 regx =  "[azAZ].*"+input.toUpperCase()+"$";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//not ends with
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#nendswith').val();
 regx =  ".*(?<!"+input.toUpperCase()+"$";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//in middle
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#inmiddle').val();
 regx =  "^(?!"+input.toUpperCase()+").*"+input.toUpperCase()+".*(?!.*"+input.toUpperCase()+"$).+";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//not in middle
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#ninmiddle').val();
 regx =  "^.[^"+input.toUpperCase()+"]+.$";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//only one aka highlander
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#onlyone').val();
 regx =  "^[^"+input.toUpperCase()+"]*"+input.toUpperCase()+"[^"+input.toUpperCase()+"]*$";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//between vowels
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#betweenvowels').val();
 regx =  "[AEIOU012] ?"+input.toUpperCase()+" ?[AEIOU012]|[AEIOU]H[012] ?"+input.toUpperCase()+" ?[AEIOU012]|[AEIOU]Y[012] ?"+input.toUpperCase()+" ?[AEIOU012]";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);

//next to a vowel
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
var input, filter;
 input = $('#nexttovowel').val();
 regx =  "[AEIOU012] "+input.toUpperCase()+"|[AEIOU]H[012] "+input.toUpperCase()+"|[AEIOU]Y[012] "+input.toUpperCase()+"|"+input.toUpperCase()+" [AEIOU012]";
 if(input == ""|| input == null){
 	return true
 }
  else if(data[1].match(regx)){
    return true;
  }
    return false;
  }
);