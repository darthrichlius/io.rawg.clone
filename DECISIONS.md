# DECISIONS

## APPLICATION ARCHITECTURE

### Why ViteJS?

- **ViteJS enables rapid development** by employing an efficient build process and supporting native ES modules, leading to quicker bundling and faster refresh times during development.
- **ViteJS incorporates built-in TypeScript integration**, aiding in identifying and addressing potential bugs for a more robust codebase.
- **This project primarily serves as a proof of concept (POC) rather than a user-oriented application**. Therefore, opting for a less complex approach without technologies like NextJS is preferable.

## OPERATIONAL ARCHITECTURE

### What's the rationale behind creating `useData()`?

`useData()` proves beneficial by facilitating the creation of a versatile hook to manage our data-fetching operations. Refactoring `useGames()` and `useGenres()` became evident due to their code similarity. Leveraging TypeScript generics ensures robust typing in our codebase.

Maintaining `useGames()` and `useGenres()` serves multiple purposes:

1. **Prevention of Component "Endpoint" Overload**: Avoids adding an endpoint directly within our components.
2. **Enhanced Code Readability and Simplicity**: By segregating logic, our code gains clarity and becomes more maintainable over time, reducing complexity.
3. **Improved TypeScript Inference Human Understanding**: The split leads to clearer TypeScript inference, enhancing code readability and maintainability.

## Design & Styling

### Why Chakra UI?

This choice is based on 3 main factors:

- The desire to **discover** a new UI Library
- Chakra UI Design System fits better with the **original application design** we are cloning
- The **challenge** of creating an application with a new, not yet mastered stack to improve skill flexibility and adaptability

