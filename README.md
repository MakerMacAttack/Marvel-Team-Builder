# Project Overview

## Marvel-Team-Builder

## Project Description

This app will allow a user to search through Marvel's extensive database of superheroes, learn pertinent information, and even construct their own dream team from the Marvel line-up!

## API and Data Sample

I will be using the Marvel API.

[Marvel Gateway API](https://gateway.marvel.com)

[Documentation](https://developer.marvel.com/documentation/getting_started)

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
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84343",
                            "name": "2020 Force Works (2020) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/84344",
                            "name": "2020 Force Works (2020) #2"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32217",
                            "name": "Amazing Spider-Man (1999) #653"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60158",
                            "name": "Amazing Spider-Man: Worldwide Vol. 7 (Trade Paperback)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61931",
                            "name": "Astonishing Tales (1970) #19"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/34490",
                            "name": "Avengers Academy (2010) #1 (DJURDJEVIC VARIANT)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6930",
                            "name": "Avengers Annual (1967) #16"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/36652",
                            "name": "Avengers Vs. Pet Avengers (2010) #3"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/23060",
                            "name": "Avengers: First to Last (Hardcover)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/23057",
                            "name": "AVENGERS: FIRST TO LAST PREMIERE HC (Hardcover)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/83365",
                            "name": "Black Panther and the Agents of Wakanda (2019) #7"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/67929",
                            "name": "Captain America (2018) #11"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/64178",
                            "name": "Captain America (2018) #25"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7697",
                            "name": "Captain America (1968) #316"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29228",
                            "name": "Captain America (2004) #611"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60945",
                            "name": "Captain America: Sam Wilson (2015) #24"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39849",
                            "name": "Fear Itself (2010) #1"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38926",
                            "name": "Fear Itself (2010) #1 (Immomen Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38975",
                            "name": "Fear Itself (2010) #1 (Ff 50th Anniversary Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39251",
                            "name": "Fear Itself (2010) #1 (Comicspro Variant)"
                        }
                    ],
                    "returned": 20
                },
                "series": {
                    "available": 41,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/29693",
                            "name": "2020 Force Works (2020)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                            "name": "Amazing Spider-Man (1999 - 2013)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/22109",
                            "name": "Amazing Spider-Man: Worldwide Vol. 7 (2018)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/16431",
                            "name": "Astonishing Tales (1970)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                            "name": "Avengers Academy (2010 - 2012)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                            "name": "Avengers Annual (1967 - 1994)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13032",
                            "name": "Avengers Vs. Pet Avengers (2010 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/6476",
                            "name": "Avengers: First to Last (2008 - Present)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/6473",
                            "name": "AVENGERS: FIRST TO LAST PREMIERE HC (2008 - Present)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/27618",
                            "name": "Black Panther and the Agents of Wakanda (2019 - Present)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/24503",
                            "name": "Captain America (2018 - Present)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
                            "name": "Captain America (1968 - 1996)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
                            "name": "Captain America (2004 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/20711",
                            "name": "Captain America: Sam Wilson (2015 - 2017)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13691",
                            "name": "Fear Itself (2010 - 2011)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/14804",
                            "name": "Fear Itself: The Fearless (2011 - 2012)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/16376",
                            "name": "Hawkeye (1983)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/9896",
                            "name": "Hawkeye & Mockingbird (2010)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13160",
                            "name": "Hawkeye & Mockingbird/Black Widow: Widowmaker (2010)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13731",
                            "name": "Hawkeye: Blindspot (2011)"
                        }
                    ],
                    "returned": 20
                },
                "stories": {
                    "available": 93,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/17388",
                            "name": "Avengers Annual (1967) #16",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/17897",
                            "name": "CAPTAIN AMERICA (1968) #316",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/36499",
                            "name": "HOUSE OF M: AVENGERS (2007) #2",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/36501",
                            "name": "HOUSE OF M: AVENGERS (2007) #3",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/36937",
                            "name": "HOUSE OF M: AVENGERS (2007) #4",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38043",
                            "name": "Cover #38043",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38047",
                            "name": "Cover #38047",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38049",
                            "name": "Cover #38049",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38053",
                            "name": "Cover #38053",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38109",
                            "name": "Cover #38109",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/38152",
                            "name": "pin-up",
                            "type": ""
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/41809",
                            "name": "Cover #41809",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/50806",
                            "name": "New Avengers (2004) #48",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/52157",
                            "name": "Interior #52157",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/52159",
                            "name": "Interior #52159",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/52872",
                            "name": "The Reunion (2009) #1",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/52874",
                            "name": "New Avengers: The Reunion (2009) #1, COVER VARIANT",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/57335",
                            "name": "Cover #57335",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/57336",
                            "name": "Interior #57336",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/57357",
                            "name": "New Avengers (2004) #56",
                            "type": "cover"
                        }
                    ],
                    "returned": 20
                },
                "events": {
                    "available": 5,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011220/events",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                            "name": "Dark Reign"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
                            "name": "Evolutionary War"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                            "name": "Fear Itself"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                            "name": "Secret Empire"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
                            "name": "Siege"
                        }
                    ],
                    "returned": 5
                },
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/comics/characters/1011220/mockingbird?utm_campaign=apiRef&utm_source=ff3b7f8acfc81a8275a4af24d1770771"
                    },
                    {
                        "type": "wiki",
                        "url": "http://marvel.com/universe/Mockingbird?utm_campaign=apiRef&utm_source=ff3b7f8acfc81a8275a4af24d1770771"
                    },
                    {
                        "type": "comiclink",
                        "url": "http://marvel.com/comics/characters/1011220/mockingbird?utm_campaign=apiRef&utm_source=ff3b7f8acfc81a8275a4af24d1770771"
                    }
                ]
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
