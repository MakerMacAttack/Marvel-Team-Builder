# Project Overview

## Marvel-Team-Builder

## Project Description

This app will allow a user to search through Marvel's extensive database of superheroes, learn pertinent information, and even construct their own dream team from the Marvel line-up!

## API and Data Sample

I will be using the Marvel API.

[Marvel Gateway API](https://gateway.marvel.com)

[Documentation](https://developer.marvel.com/documentation/getting_started)

Snippet of JSON retrieved from Marvel API:

```JSON
{

    "code": 200,
    "status": "Ok",
    "copyright": "© 2020 MARVEL",
    "attributionText": "Data provided by Marvel. © 2020 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
    "etag": "24ed4930ad11110f77d2b27a275b561817371bca",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 1,
        "count": 1,
        "results": [
            {
                "id": 1011220,
                "name": "Mockingbird",
                "description": "",
                "modified": "2015-11-20T12:04:34-0500",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/51e829af23af9",
                    "extension": "jpg"
                },
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                "comics": {
                    "available": 91,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/comics",
                    "returned": 20
                },
                "series": {
                    "available": 41,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/series",
                    "returned": 20
                },
                "stories": {
                    "available": 93,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/stories",
                    "items": [
                    ],
                    "returned": 20
                },
                "events": {
                    "available": 5,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/events",
                    "items": [
                    ],
                    "returned": 5
                },
            }
        ]
    }

}
```

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

![Mobile1](https://i.imgur.com/EpMGrwA.png)

![Mobile2](https://i.imgur.com/mcTvnBx.png)

Base functionality will be largely the same for mobile. My thought would be that search would be above the team section in a long, scrolling page. Perhaps a pair of buttons which stay fixed but only appear when the screen is narrow enough to auto-navigate to either section. They are presented as two separate pages in the wireframes above because I'm not really sure how to go about wireframing a long scroll like that.

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
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Complete
|Sept 21| Specification, Psuedocode | Complete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 22| MVP | Incomplete
|Sept 23| Basic Styling | Incomplete
|Sept 24| Post MVP, Advanced Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/5Gx31dZ.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Craft Specification | M | 2hrs| 1hr15m |  |
| Barebones HTML | H | 15m| 30m | 30m |
| Pseudocode Project | H | 3hrs| 2hr |  |
| Search for Characters | H | 2hrs| 1hr15m |  |
| Dropdown Menu | M | 2hrs | 1hr15m | 1h15m |
| Team Area | M | 2hrs | 1hr | 1hr |
| Basic Team Functionality | L | 3hrs | 2hr | 2hr |
| Advanced Team Functionality | L | 3hrs | 2hr | 2hr |
| Basic CSS | H | 2hrs | 3hr | 3hr |
| Comic Appearances | L | 2hrs | 30m | 30m |
| Responsiveness | H | 3hrs |  |  |
| Reduce Appearance Array | l | 3hrs | - | - |
| Advanced CSS | M | 3hrs | 3hr |  |
| Wrestle with CSS more | L | 3hrs | 2hr |  |
| Panic and fix unexpected issues | M | 3hrs | 2hr30m |  |
| CSS De-bugging | M | 3hrs | 2hr |  |
| Style Choices | L | 3hrs | 2hr |  |
| Keep ReadMe updated | M | 3hrs | 1hr30m |  |
| Total | H | 44hrs15m |  |  |

## Code Snippet

TBA

## Change Log
 
 Confirming that they will not provide more than 100 query results at once, meaning I cannot populate the dropdown, so that idea is sunk. 
