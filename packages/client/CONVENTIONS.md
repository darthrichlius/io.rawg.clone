# CONVENTIONS

## Commiting

This project follows the principles of ["CONVENTIONAL COMMITS"](https://www.conventionalcommits.org/en/v1.0.0/)

Please make sure to go check the description before commiting.

### Conventional Commits Summary

Below a summary of the principles

```
OBF - Original Black Flag) Blog<type>[optional scope]: <description>

[optional body]

[optional footer]
```

- **Type**: Describes the nature of the commit. Common types include:

  - feat: A new feature
  - fix: A bug fix
  - docs: Documentation changes
  - style: Code style/formatting changes
  - refactor: Code refactoring without changing its behavior
  - test: Adding or modifying tests
  - chore: Changes related to build processes, tooling, etc.
  - perf: Performance improvements

- **Optional Scope**: Indicates the section of the codebase affected by the commit.

- **Description**: Brief summary of the changes. Use imperative language ("Add feature" instead of "Added feature").

- **Optional Body**: Additional details explaining the commit, if needed. This section can provide more context about the changes made.

- **Optional Footer**: Includes metadata or references, such as issue tracker IDs or breaking change notices.

### Examples

<table>
<tbody>
<tr>
    <td style="font-weight: bold">New Feature</td>
    <td>`feat(api): Add endpoint for user authentication`</td>
</tr>
<tr>
    <td style="font-weight: bold">Big Fix</td>
    <td>`fix(ui): Resolve issue with button alignment`</td>
</tr>
<tr>
    <td style="font-weight: bold">Documentation Change</td>
    <td>`docs(readme): Update installation instructions`</td>
</tr>
<tr>
    <td style="font-weight: bold">Code Style</td>
    <td>`style(format): Apply consistent code formatting`</td>
</tr>
<tr>
    <td style="font-weight: bold">Refactor</td>
    <td>`refactor(api): Restructure data models for improved readability`</td>
</tr>
<tr>
    <td style="font-weight: bold">Test</td>
    <td>`test(auth): Add unit tests for authentication logic`</td>
</tr>
<tr>
    <td style="font-weight: bold">Chore</td>
    <td>`chore(build): Update dependencies for security patches`</td>
</tr>
<tr>
    <td style="font-weight: bold">Performance Improvement</td>
    <td>`perf(api): Optimize database queries for faster response`</td>
</tr>
</tbody>
</table>

### Benefits of Conventional Commits

1. **Clarity and Readability**: Offers a consistent and standardized format for commit messages, making it easier to understand changes.

2. **Automated Release Notes**: Tools can automatically generate release notes and version bumps based on commit messages following this convention.

3. **Facilitates Collaboration**: Enhances communication among team members by providing clear information about changes made.
