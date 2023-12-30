# DECISIONS

## APPLICATION ARCHITECTURE

### Why ViteJS?

- **ViteJS enables rapid development** by employing an efficient build process and supporting native ES modules, leading to quicker bundling and faster refresh times during development.
- **ViteJS incorporates built-in TypeScript integration**, aiding in identifying and addressing potential bugs for a more robust codebase.
- **This project primarily serves as a proof of concept (POC) rather than a user-oriented application**. Therefore, opting for a less complex approach without technologies like NextJS is preferable.

### Why so much configuration?

Employing an extended configuration approach:

1. **Simplifies Complexity:** Reduces intricacies within the setup.
2. **Facilitates Ease of Changes:** Makes updates simpler.
3. **Enhances Code Generality:** Contributes to less intricacies and dependencies within Components.
4. **Ideal for Testing:** Enables testing of specific scenarios by modifying or creating distinct config files.
5. **Deployments Benefit:** Supports different config files tailored to various environments, offering adaptability during deployment.

### How the Decision to Move for Zustand as Global State Management Came Up?

#### Complexity Prevention & Performance Optimization

1. The previous version, prior to Zustand, had some **flaws that we needed to address before they became serious** and too problematic due to a significant technical debt.
2. The spreading of data and information relied on props, resulting in **prop drilling** and **complex data distribution**.
3. Using a State Management tool was the best approach as it **was more affordable**. The others would have required the intervention of an architecture based on `useReducer()` and `Context`.
   - That solution would not have been the best as it can **create unnecessary re-renders** and negatively impact performance.
   - Indeed, the Query object is regularly used without having a strategic critical impact, unlike what a "Routing Provider" could have.
   - The problem is, any change in the context will trigger a re-render, creating a performance issue.
   - For **example**, whenever the user selects a Genre (which is part of the QueryObject), all components would re-render even if it is not necessary: `SearchBar`, `PlatformSelector`, `SortOrderSelector`, ...
   - And this logic also applies when the user changes the platform or selects another "SortOrder".

#### Zustand over Redux

- Given the immediate needs and those expected in the short term, we needed a solution that implies simplicity and requires a minimal amount of code.
- Zustand was a better option, as it is less complex and less cumbersome to manage than Redux.
- However, as for any technical decision, the choice may change in the future depending on the specificities.

## OPERATIONAL ARCHITECTURE

### What's the rationale behind creating `useData()`?

`useData()` proves beneficial by facilitating the creation of a versatile hook to manage our data-fetching operations. Refactoring `useGames()` and `useGenres()` became evident due to their code similarity. Leveraging TypeScript generics ensures robust typing in our codebase.

Maintaining `useGames()` and `useGenres()` serves multiple purposes:

1. **Prevention of Component "Endpoint" Overload**: Avoids adding an endpoint directly within our components.
2. **Enhanced Code Readability and Simplicity**: By segregating logic, our code gains clarity and becomes more maintainable over time, reducing complexity.
3. **Improved TypeScript Inference Human Understanding**: The split leads to clearer TypeScript inference, enhancing code readability and maintainability.

### Why use an Array to store filters when we can only select one?

- We could have opted for a simpler approach to store and distribute the filter data, without question.
- The rationale behind this decision stems from our intention to eventually enable users to select multiple filters from the same category.
- Admittedly, this approach involves "coding by anticipation," which is generally considered a suboptimal strategy. So, why did we choose it?
  1. This being a Proof of Concept (POC) project allows us more freedom, although debatable. However, there's more to consider in the following point.
  2. Using this format enables us to test and gain experience with an approach we anticipate will be crucial in our next iteration.
  3. We acknowledge its complexity, yet this is precisely why we're implementing it within the POC rather than a product ready for release.
- In summary, we're testing a complex approach to determine:
  1. Feasibility.
  2. Implementation costs.
  3. Opportunities for optimizing efficiency.
  4. Ultimately, considering costs, risks, and experience gained, **Should we proceed? If so, when?**

### Why placing the logic of getting store data inside `useGames()` and not `<GameGrid />`?

- Placing the logic within `useGames()` have several advantages
  1. Making it simple to reuse `useGame()` anyway in the app. We don't duplicate the logic to extract the parameters and send them over and over again
  2. It helps in making it more simple to manage the difference process of formatting the query param object
  3. Make any changes less costly. If tomorow the logic to process the data needed for the request change, it will change inside `useGames()` while making it transparent for clients
  4. Eventially, wether the logic is set in `useGame()` or `<GameGrid />` doesn't a negative impact or cost for `<GameGrid />`

### Consideration: Query Object vs. Filters, Search, and Ordering

- The alternative approach of using a single Query Object to encapsulate all related query elements was a possibility.
- However, we initially adopted the "scatter" approach and have yet to find a compelling reason to change our strategy.
- Any changes should stem from a clear perspective of substantial gain, which, as of now, remains elusive.
- While transitioning might promise cleaner code, there's no concrete evidence supporting this claim. Attempting to disprove this would consume valuable time and energy that we aim to conserve.
- Up to this point, the current method has been operational without manifesting complexity.
- Anytime in the future, if we find that this approach impacts code maintainability, security, reliability, or scalability, we will consider trying another approach.

### Why Creating DefaultContentLayout?

- Creating `<DefaultContentLayout />` was definitely not necessary at this stage and can be qualified as **"coding by anticipation"** or **"unnecessary complexity"**.
- However, this project is a POC and an opportunity for testing and improvement.
- The goal was to implement, assess that pattern, and learn from it.
- Again, this is a demonstration of the implementation of different layout scenarios: **PageLayout** and **ContentLayout**.

## Design & Styling

### Why Chakra UI?

This choice is based on 3 main factors:

- The desire to **discover** a new UI Library
- Chakra UI Design System fits better with the **original application design** we are cloning
- The **challenge** of creating an application with a new, not yet mastered stack to improve skill flexibility and adaptability
