# Project Overview

## Marvel-Team-Builder

## Project Description

This app will allow a user to search through Marvel's extensive database of superheroes, learn pertinent information, and even construct their own dream team from the Marvel line-up!

## API and Data Sample

I will be using the Marvel API.

[https://gateway.marvel.com]

((Should I include a link to the documentation?))

```JSON
{…}
​
comics: {…}
​​
available: 91
​​
collectionURI: "http://gateway.marvel.com/v1/public/characters/1011220/comics"
​​
items: Array(20) [ {…}, {…}, {…}, … ]
​​
returned: 20
​​
<prototype>: Object { … }
​
description: ""
​
events: {…}
​​
available: 5
​​
collectionURI: "http://gateway.marvel.com/v1/public/characters/1011220/events"
​​
items: Array(5) [ {…}, {…}, {…}, … ]
​​
returned: 5
​​
<prototype>: Object { … }
​
id: 1011220
​
modified: "2015-11-20T12:04:34-0500"
​
name: "Mockingbird"
​
resourceURI: "http://gateway.marvel.com/v1/public/characters/1011220"
​
series: {…}
​​
available: 41
​​
collectionURI: "http://gateway.marvel.com/v1/public/characters/1011220/series"
​​
items: Array(20) [ {…}, {…}, {…}, … ]
​​
returned: 20
​​
<prototype>: Object { … }
​
stories: {…}
​​
available: 93
​​
collectionURI: "http://gateway.marvel.com/v1/public/characters/1011220/stories"
​​
items: Array(20) [ {…}, {…}, {…}, … ]
​​
returned: 20
​​
<prototype>: Object { … }
​
thumbnail: {…}
​​
extension: "jpg"
​​
path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/51e829af23af9"
​​
<prototype>: Object { … }
​
urls: Array(3) [ {…}, {…}, {…} ]
​
<prototype>: Object { … }
app.js:13:13

```

## Wireframes - STILL NEED TO DO THIS

Figma

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

#### MVP 

- Users can search Marvel's database for heroes and villains 
- Users will be able to 'save' five characters to form a specific team
- Responsive CSS

#### PostMVP  

- Select Team Leader
- Provide additional information about characters
-- Such as which comics they've been in the most

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval | Incomplete
|Sept 21| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 22| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix - STILL NEED TO DO THIS!

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

List of features:
-Dropdown search
-Type search
-Returns image
-Choose for team
-Remove from team
-Make Leader
--Remove Current Leader
-Basic CSS
-Advanced CSS
-Additional Info
--List of Comic Appearances

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Search for Characters | H | 2hrs|  |  |
| Dropdown Menu | H | 2hrs |  |  |
| Team Area | M | 2hrs |  |  |
| Basic Team Functionality | L | 3hrs |  |  |
| Advanced Team Functionality | H | 3hrs |  |  |
| Basic CSS | H | 2hrs |  |  |
| Comic Appearances | L | 2hrs |  |  |
| Reduce Appearance Array | l | 3hrs |  |  |
| Advanced CSS | L | 3hrs |  |  |
| Wrestle with CSS more | L | 3hrs |  |  |
| Panic and fix unexpected issues | H | 3hrs |  |  |
| CSS De-bugging | H | 3hrs |  |  |
| Style Choices | L | 3hrs |  |  |
| Keep ReadMe updated | H | 3hrs |  |  |
| Total | H | 36hrs |  |  |

## Code Snippet

I was kind of proud that I was able to use the documentation to figure out exactly what they wanted as a hash, and then learned how to construct it.

```
	let ts = new Date().getTime()
	let hash = md5(ts + private + public) 
	const char = await axios.get(`${base}${endpoint}${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
