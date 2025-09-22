# Scam Storyboard Flow

A comprehensive React application designed to educate users about scams, provide tools for verification, reporting, and fighting back against scammers. This interactive web application guides users through various flows to help them identify, report, and protect themselves from online scams.

## Table of Contents

- [Overview](#overview)
- [Application Flow](#application-flow)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Design Guidelines](#design-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Scam Storyboard Flow is an educational tool designed to help users navigate the complex world of online scams. It provides a step-by-step guide for users to:

1. **Verify** potential scams
2. **Educate** themselves about scam techniques
3. **Share** information with others
4. **Report** scams to appropriate authorities
5. **Take Action** through various protective or offensive measures

The application employs a user-friendly interface with a focus on accessibility and clear navigation, making it suitable for users of all technical skill levels.

## Application Flow

The application follows a structured flow that guides users through a complete scam education and response process:

```
                    ┌─────────────────┐
                    │     Verify      │ ◄─── Start Here
                    │  (Scam Check)   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Share       │
                    │   (Socialize)   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Report      │
                    │  (Scam Report)  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Auto Report   │
                    │   (Options)     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Actions     │
                    │  (Branch Point) │
                    └──┬────────┬────┬─┘
                       │        │    │
        ┌──────────────┘        │    └──────────────┐
        │                       │                   │
        ▼                       ▼                   ▼
┌─────────────────┐    ┌─────────────────┐  ┌─────────────────┐
│    Protect      │    │      Fight      │  │     Educate     │
│   Yourself      │    │   (Take Action) │  │  (Learn More)   │
└─────────────────┘    └─────────────────┘  └─────────────────┘
```

### Flow Description:

1. **Verify**: Users start by verifying if a communication is a scam, using tools to analyze messages or images.
   
2. **Share**: Users can share information about the scam with friends, family or communities.
   
3. **Report**: Provides mechanisms to report scams to appropriate authorities or platforms.
   
4. **Auto Report**: Offers automated reporting options to streamline the process.
   
5. **Actions**: A decision point where users choose one of three paths:
   
   - **Protect Yourself**: Tools and techniques to enhance personal security:
     - Email subject line identifiers
     - Word/number tricks for identifying scam emails
     
   - **Fight Back**: Options to actively combat scammers:
     - Request website/service shutdowns
     - Write to Congress/representatives
     - Safe methods for baiting scammers
     - Donation options for anti-scam organizations
     
   - **Educate**: Further educational resources about scams and prevention techniques

The design allows users to navigate back and forth between sections, with a progress indicator showing their current position in the flow.

## Features

### Verification Tools
- Upload and analyze suspicious messages or images
- Check common scam indicators
- Anti-scam verification checklists

### Education Resources
- Information about common scam types
- Red flag indicators
- Case studies of real scams

### Reporting Mechanisms
- Direct reporting to authorities
- Automated reporting workflows
- Report templates and guidelines

### Protection Strategies
- Email subject line identifiers
- Word/number trick techniques
- Personal security checklists

### Fighting Back Options
- Requesting website/service shutdowns
- Writing to Congress/representatives
- Safe methods for baiting scammers
- Donation options for anti-scam organizations

## Project Structure

```
scam-storyboard-flow/
├── public/                   # Static files
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Fight/            # Components for fighting back against scams
│   │   ├── Protect/          # Components for protection strategies
│   │   ├── ui/               # Reusable UI components
│   │   └── ...               # Other main flow components
│   ├── App.js                # Main application component
│   ├── flowConfig.js         # Flow configuration
│   ├── index.js              # Entry point
│   └── theme.js              # Chakra UI theme configuration
└── package.json              # Dependencies and scripts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/scam-storyboard-flow.git
   cd scam-storyboard-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Start at the Verification Stage**:
   - Upload suspicious content or input text to analyze
   - Follow the guided verification process

2. **Explore Educational Resources**:
   - Learn about common scam techniques
   - Understand warning signs

3. **Choose Your Path**:
   - Protect yourself with preventative measures
   - Fight back against scammers with reporting and action
   - Share information with others

4. **Complete Actions**:
   - Follow step-by-step guides for each action
   - Get confirmation and next steps

## Technologies Used

- **React** - Frontend library
- **Chakra UI** - Component library for consistent, accessible UI
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **Next Themes** - Theme management

## Design Guidelines

This project follows specific design guidelines to ensure usability, accessibility, and visual appeal:

- **Clean, modular layout** with cards and panels
- **Clear navigation** with consistent button placement
- **Accessible color schemes** with proper contrast
- **Responsive design** for all devices
- **Consistent typography** using modern sans-serif fonts
- **Meaningful iconography** paired with descriptive text

For full design guidelines, see [WEB-PAGE-DESIGN-GUIDELINES.md](.github/instructions/guidelines.instructions.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Created with ❤️ to help people stay safe online*
