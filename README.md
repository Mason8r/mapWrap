# mapWrap
add a 'click to use' function on top of the google maps API

## How to
include both mapWrap.css and mapWrap.js, then use the following function after your google maps api call:
    
    mapWrap('idOfMapElement')


## What do
Puts a clear div over your google maps div, stopping any interaction with the map. Also adds a little padlock in the bottom right corner as an indication that the map it locked. Click on the map or the padlock unlocks the map. Clicking on the padlock again re-locks the map. 

## Why use?
Created because the maps div was messing up the site scroll. But then after a quick google search, it turns out you can just set the scrollwheel to false in map options. e.g. 

    var mapOptions = {scrollwheel: false};

And the problem is solved. So kinda makes this little thing redundant..... Ahhh well. Padlock!