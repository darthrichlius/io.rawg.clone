# IMPROVEMENTS

This file is aimed at collecting any **IMPROVEMENTS IDEAS** or TASKS related to **TECHNICAL DEBT**.

## RULES

- Any member of the development team can directly add a TASK or an IMPROVEMENT IDEA while adhering to the CONTRIBUTING rules
- The addition will be reviewed by the project leader. If the addition is not eligible, it must be removed.
- All additions are considered ELIGIBLE, as none ineligible items are added.
- Stakeholders can indirectly contribute to the file through a member of the development team.
- This file serves as a "Backlog," not a "Kanban" board.
- When an item has been RESOLVED or REJECTED, it is either removed or added to the ARCHIVED section.

## TECHNICAL DEBT

### PATCH

- Refactor the code to avoid passing "onSearch" throughout Component as it is a open door to deep nesting
- We must decide it we want to keep the implementation with the individual parameters passed to GameList
  - It creates so much noise and code smell
- We must refactor the code to make sure we keep it consistent by relying to a single source of thruth for GameQuery
- chore(config): Don't use the export default or make the export type consistent with UI_CONFIG

## IMPROVEMENTS IDEAS

### UX (Look & Feel)

- **!IMPORTANT**
  - The mobile version is not very appealing, we should have a burger menu and add some of the header features into the mobile menu
- Some GameCard have huge blank space we should either reduce the card or find a solution that doesn't hurt the UX

### Product

- Create an admin app that will help in manageming our data from our database. The goal is to update data when ever we want. For example,to update a release date.
- Create a Member are with authentication
- For members, get an alert when there is an update on a game (score, releases, ...)
- Bind the game to news links that could interest members

### Technical

#### Data

- Create our own database that will contains game data. The database will store data from request made by users. The goal is to fill the database by time avoiding to crawl the API and be detected as a bot and get our access closed

#### Performance

##### Caching

- Cache result for a certain period to have making too much API calls. API calls are limited and are free until we reach a MAX_LIMIT

#### Images

- Prevent users from copying image directly with left click. Add an overlay

## ARCHIVED
