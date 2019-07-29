## Coding Challenge

### The Idea

The purpose of this challenge is to give us an idea about your coding skills.

At XING we value well structured and tested code. Semantic HTML, modern and responsive CSS, a consistent coding style and a structured workflow are important to us.

### Challenge

You build a ReactJS application which contains a list and a detail view of eg. messages, a to-do-list, bookmarked articles.
Start with `create-react-app`(https://github.com/facebook/create-react-app). Please do the layout and styling with your own css. Don't use any component libraries like bootstrap or material-ui.

<img src="fe_hiring_challenge.png">

- Total working time should not be more than 6 hours
- Please don't use something you already developed
- Document your code (see below)
- Please use separate branches for part 1 and part 2

#### Task - Part 1

In this task we like to see how you write your frontend code. Keep it simple and don't use any external API. You can iterate on that feature in the second part of the coding challenge.
The application should be somewhat pleasant to look at and responsive.

1. Create a page with two sections.
2. In one section you have a list of items (min. 2 items) with a little preview of the content.
3. In the other section there's a detail view of the selected item.
4. When you click on one of the items in the list, the content is shown in the other section.
5. Use your own mock data.

This is the base for the second part.

#### Task - Part 2

It's your turn now! Show off your coding skills and extend the application.
Come up with your own idea or take some inspiration from these examples:

- CSS animations
- filter functionality for the list view
- mark an item as read
- data manipulation
- use a public API instead of mock data (eg. https://github.com/toddmotto/public-apis)
- Add more pages by using routes
- fully accessible with tabs and screen readers
- etc.

### Notes

- We'd like to see how familiar you're with React and React features.
- If you think you'll need another framework please explain shortly in the documentation section.
- Testing your code is important, we'd like to see some tests (full coverage not required).

### Documentation

Use this readme to document what you've built.
Make sure that the person that reviews this code understands your choices and limitations.

- Describe what you've built. A screenshot is always nice.
- Commit messages are also some kind of documentation.
- Outline your reasoning behind technical choices (architecture, third party libs, React features, etc.)
- Explain technical trade-offs
- Anything you skipped due to time constraint?
- What would you add if you had additional time for this project?

Happy coding & good luck! 🚀

---

## Candidate's doc

_Please provide your documentation and outline your choices._

I enjoy reading good comic books. But nowadays is it very hard to find them without visiting a comic book store. So I built a "Comic Book Adviser" that can give you rfesh inspiration, what to read next.

The app is devided into a list and a detail section.
Both are resizing depending on the width of thhe screen.
Mayor break points are

- at 550px for smartphones in portrait mode and
- at 860px for tablets aore smartphones in landscape mode

I decided to start with the following layouts from here:

<img src="./docs/part-1-mobile-detail-view.png" style="max-height:350px">
<img src="./docs/part-1-mobile-list-view.png" style="max-height:350px">

A one column Design for small screen-sizes with a modal view for the details. Maximizing the screen real estate for this visual medium. I am a typical 'one hand smartphone user', so I optimzed the button locations for maximum thumb-friendliness.

<img src="./docs/part-1-tablet-view.png" style="max-height:350px">

A two columns design, that focuses on the comic book covers with a list and a detailview for bigger Devices.

<img src="./docs/part-1-desktop-view.png" style="max-height:350px">

A two column design that gives even more space for details and the selected cover at one glance on 'desktop screens.'

Here is an outline of my thoughts and the things that I did during PART 1.

### Part 1

- first structural prototype on paper and with raw HTML
- building components out of the obvious building blocks
- introducing semantic HTML
- focusing early on tests
- creating a validator/serializer to keep the 'circle of trust' as clean as possible
- trying out different worklflows for using React, as it is fairly new to me (CRA was a great help)
- focusing on readability by destructuring the props and keeping complexity down
- introducing a 'comic book style' font to enhance the experience
- utilizing flexbox for speed and realiability, because using a framework would have been way to much overhead for a simple view like this one
- adjusting tests and optimizing data validation while trying to focus on the minimalistic visuals, so that the comic book covers can shine

See you on branch part-2
