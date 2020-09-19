# Project Overview

## Marvel-Team-Builder

## Project Description

This app will allow a user to search through Marvel's extensive database of superheroes, learn pertinent information, and even construct their own dream team from the Marvel line-up!

## API and Data Sample

I will be using the Marvel API.

[Marvel Gateway API](https://gateway.marvel.com)

[Documentation](https://developer.marvel.com/documentation/getting_started)

![JSON snippet](https://i.imgur.com/kAfZAI7.png)

## Wireframes

Desktop

![Desktop](https://i.imgur.com/xSrQupU.png)

The user will select someone from the dropdown, or input text in the text field, and then click Search.

The character's profile image will appear in the main part of the screen, with one button to add to the team and another to request more info.

Clicking more info will display additional information.

'Add to team' will be grayed out if there are currently five members of the team. Clicking it will add the current character to the user's team.

Team section will start empty and populate as the user chooses characters.

Anyone who isn't leader will have a button which will make the current leader (if there is one), not a leader anymore, and make them the leader.

All team characters will have a button to remove them from the team.

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
| Responsiveness | H | 3hrs |  |  |
| Reduce Appearance Array | l | 3hrs |  |  |
| Advanced CSS | L | 3hrs |  |  |
| Wrestle with CSS more | L | 3hrs |  |  |
| Panic and fix unexpected issues | H | 3hrs |  |  |
| CSS De-bugging | H | 3hrs |  |  |
| Style Choices | L | 3hrs |  |  |
| Keep ReadMe updated | H | 3hrs |  |  |
| Total | H | 39hrs |  |  |

## Code Snippet

I was kind of proud that I was able to use the documentation to figure out exactly what they wanted as a hash, and then learned how to construct it.

```
	let ts = new Date().getTime()
	let hash = md5(ts + private + public) 
	const char = await axios.get(`${base}${endpoint}${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
