# Design System
Basic and scalable design system using TypeScript and Styled components.

### A short guide to the project

Built using TypeScript and Styled Components, my intention was to make it the most simple, scalable and customizable possible, so it can be used as a starting point for any project.

### Disclaimer
This project uses Node 16.14.2 because of StoryBook compatibility issues. If you want still to use a different version, I cannot assure you that StoryBook's module will work.

### Testing with StoryBook

For testing with StoryBook, run: `npm run storybook` and go to `http://localhost:6006/`.
To add elements to the StoryBook, simply add a new file in the `__stories__` folder inside source.

### About the theme

Remember that a design system is not only a collection of UI components but also a set of guidelines, principles, and best practices that ensure consistency, efficiency, and scalability.

In this particular project I feature a `theme.ts` basic file but don't really extend it to components. But it's there if you want to use it. You should if you want to make your project as complete and easy to scale as you can, but it requires the work of a graphic designer which I don't have at the moment.

### About the color palette

Since you recall, I'm no designer so I'm using Atlassian's color palette, which you can find [here](https://atlassian.design/foundations/color).