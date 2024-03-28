# Security Sniffer

## Overview

Security Sniffer is a robust application designed to empower users in safeguarding sensitive information from inadvertent exposure. In an age where digital privacy is of paramount importance, Security Sniffer provides a comprehensive solution to ensure that critical data, such as credit card information, personal details in health records, and other confidential content, remains protected.

Crafted with user-friendly interfaces and powered by cutting-edge technology, Security Sniffer acts as a virtual security guard, allowing users to create personalized security cards with rules for inclusion and exclusion. The application's primary goal is to enhance user awareness and prevent accidental leakage of sensitive information, promoting a secure digital environment.

### Problem

The proliferation of digital data has led to an increased risk of unintentional exposure of sensitive information. Users often handle various types of confidential data on their devices, ranging from financial details to personal health records. The absence of a dedicated tool to manage and control the display of such sensitive information creates a vulnerability that Security Sniffer aims to address.

Security Sniffer seeks to mitigate the risk of inadvertent data exposure by empowering users to define rules and criteria for what should be displayed and what should be hidden in various applications. By providing a customizable and proactive approach to data security, the app addresses the gap in existing tools that often lack user-centric control over sensitive information.

### User Profile

Security Sniffer is tailored for individuals and professionals who prioritize the protection of sensitive information in their digital interactions. Here's a breakdown of potential user profiles:

#### Privacy-Conscious Users

- **Age Range:** Varied, catering to users of all age groups.
- **Profession:** Diverse, including professionals in finance, healthcare, legal, and any field dealing with confidential information.
- **Motivations:** Seeking a proactive tool to ensure the privacy of sensitive data, preventing accidental disclosures in various applications.

#### Professionals Handling Sensitive Data

- **Profession:** Individuals working in roles where handling confidential information is a routine aspect, such as financial analysts, healthcare providers, and legal professionals.
- **Motivations:** Enhancing data security practices, ensuring compliance with privacy regulations, and preventing data leaks during day-to-day operations.

#### Tech Enthusiasts

- **Age Range:** Varied, encompassing users passionate about technology and digital privacy.
- **Motivations:** Exploring innovative tools to enhance their digital security, experimenting with customizable solutions for data protection.

By catering to these user profiles, Security Sniffer aims to offer a versatile tool that addresses the unique needs of individuals and professionals striving for enhanced digital privacy.

### Features

### User Stories for Security Sniffer App

#### 1. Adding a Security Card

**Scenario:**

As a user concerned about the privacy of sensitive information, I want to create a security card to define rules for displaying or hiding specific data in various applications.

**Acceptance Criteria:**

1. When I open the Security Sniffer app, I should see an "Add Security Card" button on the main screen indicated by a plus icon.
2. Upon clicking the "Add Security Card" button, I am navigated to a new screen with input fields to define rules.
3. I can specify inclusion rules for data that should be displayed and exclusion rules for data that should be hidden.
4. The app provides intuitive options to set conditions, keywords, or patterns for inclusion and exclusion.
5. After defining the rules, I can save the security card, and it becomes active for monitoring sensitive data.

#### 2. Displaying Existing Security Cards

**Scenario:**

As a user managing multiple security cards, I want to view a list of existing security cards to monitor and edit their rules.

**Acceptance Criteria:**

1. When I open the Security Sniffer app, I should see a "View Security Cards" button on the main screen indicated by an eye icon.
2. Clicking the "View Security Cards" button takes me to a screen displaying a list of all existing security cards.
3. Each security card entry in the list includes a brief summary of its rules and settings.
4. I can select a specific security card from the list to view and edit its rules.
5. The app provides an option to easily navigate back to the main screen after reviewing existing security cards.

#### 3. Deleting a Security Card

**Scenario:**

As a user managing my privacy preferences, I want the ability to delete a security card that is no longer needed.

**Acceptance Criteria:**

1. When I open the Security Sniffer app, I should see a "Delete Security Card" button on the main screen indicated by a trashcan icon.
2. Clicking the "Delete Security Card" button takes me to a screen displaying a list of all existing security cards.
3. Each security card entry in the list includes a "Delete" button or option.
4. I can select a specific security card and choose the "Delete" option to remove it from the active security cards list.
5. The app prompts for confirmation before permanently deleting a security card to prevent accidental removal.
6. After successful deletion, the app updates the list of security cards to reflect the changes.

These user stories ensure a seamless and user-friendly experience for creating, managing, and deleting security cards within the Security Sniffer app.


### Tech Stack

#### Frontend

- **React:** The primary frontend library for building a dynamic and responsive user interface.
- **React Router:** Facilitating navigation and routing within the application.
- **Axios:** A promise-based HTTP client for making network requests, essential for communication with the backend.

#### Backend

- **Express.js:** A fast and minimalist web framework for Node.js, serving as the backend server.
- **Node.js:** The JavaScript runtime for server-side execution, ensuring a unified language stack.

### Development Tools

- **Webpack:** A module bundler for the frontend, optimizing and bundling JavaScript and CSS files.
- **Babel:** Enabling the use of the latest ECMAScript features in JavaScript code.
- **ESLint:** A linter for identifying and fixing problems in JavaScript code, ensuring code quality.
- **Postman:** A tool for testing and debugging API endpoints during development.

### Sitemap

1. **Main Page:**
   - **Route:** `/`
   - **Description:** The main landing page of Security Sniffer where users can navigate to different sections of the application. It provides access to adding a new security card, viewing existing security cards, and deleting unwanted security cards. 

2. **Add Security Card Page:**
   - **Route:** `/upload`
   - **Description:** A dedicated page for users to create new security cards. Users can define rules for displaying or hiding specific data in various applications by setting inclusion and exclusion criteria. This page is accessible from the main page.

3. **View Security Cards Page:**
   - **Route:** `/`
   - **Description:** This page displays a list of existing security cards. Users can view summaries of each card's rules and settings. Clicking on a specific security card allows users to review and edit its rules. Accessible from the main page.

4. **Delete Security Card Page:**
   - **Route:** `/delete`
   - **Description:** Users can navigate to this page to delete unwanted security cards. It displays a list of existing security cards with options to delete each card. Users can access this page from the main page for efficient management of security cards.


### Mockups

#### Mobile Screen
![Screenshot 2024-02-27 at 10 53 37 AM](https://github.com/GillianTrethewey/Security-Sniffer-frontend/assets/7611178/dd83ca86-cda6-4d64-b8d1-cb4deaa127e7)


#### Tablet Screen
![Screenshot 2024-02-27 at 10 53 55 AM](https://github.com/GillianTrethewey/Security-Sniffer-frontend/assets/7611178/1b37f31a-6833-4f7e-b8e3-7a7f0bd98924)


#### Desktop Screen
![Screenshot 2024-02-27 at 10 54 08 AM](https://github.com/GillianTrethewey/Security-Sniffer-frontend/assets/7611178/afe4a72e-6221-4531-9b88-8fc1b3b392b4)


### Data

Security Sniffer manages data related to user-created security cards, each defining rules for the inclusion and exclusion of sensitive information. The primary entities in the data model are:

#### 1. Security Card

- **Attributes:**
  - `id`: Unique identifier for each security card.
  - `name`: User-defined name for the security card.
  - `description`: String describing the usage of the rules for the security card.
  - `includedPatterns`: String of rules specifying conditions for displaying certain data.
  - `excludedPatterns`: String of rules specifying conditions for hiding certain data.
  - `sensitivity`: Specific constrained selection of, 'LOW', 'MEDIUM', or 'CRITICAL'.

- **Relationships:**
  - One-to-Many with User: Each security card is associated with one user, but a user can have multiple security cards.

#### 2. User

- **Attributes:**
  - `id`: Unique identifier for each user.
  - `name`: User's chosen username.

- **Relationships:**
  - One-to-Many with Security Card: Each user can create multiple security cards, but each security card belongs to one user.

In this data model, each user can create multiple security cards, each with its own set of rules. The relationships are established through the `id` attribute, creating a one-to-many relationship between users and their security cards.

This structure allows for efficient organization and retrieval of data, ensuring that each user has a personalized set of security cards to manage their specific rules for data inclusion and exclusion.


### Endpoints

#### 1. Create Security Card

- **Endpoint:** `/api/cards`
- **Method:** POST
- **Parameters:**
  - `id` (in the request body): The unique identifier of the security card.
  - `name` (in the request body): The user-defined name for the security card.
  - `description` (in the request body): A brief description or purpose of the security card.
  - `includedPatterns` (in the request body): A string of patterns specifying conditions for displaying certain data.
  - `excludedPatterns` (in the request body): A string of patterns specifying conditions for hiding certain data.
  - `sensitivity` (in the request body): A measure of the sensitivity level associated with the security card.
- **Example Request Body:**

  ```json
  {
    "id": "789012",
    "name": "Finance Rules",
    "description": "Rules for managing financial data",
    "includedPatterns": "Credit Card string",
    "excludedPatterns": "Social Security string",
    "sensitivity": "High"
  }
  ```

- **Example Response:**

```json
{
  "id": "789012",
  "name": "Finance Rules",
  "description": "Rules for managing financial data",
  "includedPatterns": "Credit Card string",
  "excludedPatterns": "Social Security string",
  "sensitivity": "High"
}
```

#### 2. Get All Security Cards

- **Endpoint:** `/api/cards`
- **Method:** GET
- **Parameters:**
  - None

```json
[
  {
  "id": "789012",
  "name": "Finance Rules",
  "description": "Rules for managing financial data",
  "includedPatterns": "Credit Card string",
  "excludedPatterns": "Social Security string",
  "sensitivity": "High"
  },
  {
    "id": "345678",
    "name": "Health Records",
    "description": "Rules for managing health records",
    "includedPatterns": "Medical Tests string",
    "excludedPatterns": "Prescription Details string",
    "sensitivity": "Medium"
  }
]
```

#### Delete Security Card

- **Endpoint:** `/api/cards/:id`
- **Method:** DELETE
- **Parameters:**
  - `id` (in the URL path): The unique identifier of the security card to be deleted.
- **Example Response:**

```json
{ 
    message: "Security Card with ID ${id} deleted successfully" 
}
```

## Roadmap

The functionality of having a local server and frontend will be completed in the first Sprint. This will enable to shareholders to interact with the app.


## Nice-to-haves

Convert the project to TypeScript.
