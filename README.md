
# Scam Storyboard Flow

**Empowering users to recognize, report, and fight online scams.**

Scam Storyboard Flow is a modern, interactive React application designed to educate and equip users with practical tools to combat online scams. Through a guided, step-by-step experience, users learn to identify scams, take protective action, and contribute to a safer digital community. This project is built for clarity, accessibility, and real-world impact.

---

## Project Highlights

- **End-to-end scam education and action flow**: From initial suspicion to reporting and fighting back, the app covers every stage.
- **User-centric design**: Clean, accessible UI with clear navigation and progress indicators.
- **Branching decision points**: Users can choose to protect themselves, fight back, or learn more, based on their needs.
- **Real-world tools**: Includes checklists, reporting templates, and interactive learning modules.
- **Built for accessibility and responsiveness**: Works seamlessly across devices and for all users.

---
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

> **Note (as of 09-22-2025):**
>
> This project is a rough storyboard prototype intended to collect user feedback for a potential scam reporting and education mechanism. The design, flow, and features are subject to significant change based on user input and committee review. Please treat this as an early-stage concept for discussion and iteration.

Scam Storyboard Flow addresses the urgent need for digital scam awareness and self-defense. The application guides users through:

1. **Verification** – Analyze suspicious messages or images to determine scam risk.
2. **Education** – Learn about common scam tactics and red flags.
3. **Sharing** – Spread awareness and resources with others.
4. **Reporting** – Take direct action by reporting scams to authorities.
5. **Taking Action** – Choose to protect yourself, fight back, or deepen your knowledge.

The intuitive interface, clear progress tracking, and actionable resources make Scam Storyboard Flow suitable for all audiences—from individuals and families to organizations and educators.

---

## Why This Matters

Online scams are increasingly sophisticated and widespread, targeting people of all ages and backgrounds. Education and proactive action are the best defenses. Scam Storyboard Flow empowers users to:

- Recognize and avoid scams before harm occurs
- Report incidents quickly and effectively
- Share knowledge to protect their communities
- Take meaningful action against scammers

---


## Application Flow

The application leads users through a structured, interactive journey:

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


### Flow Description

1. **Verify** – Start by checking if a message or communication is a scam using built-in analysis tools.
2. **Share** – Spread awareness by sharing findings and resources with others.
3. **Report** – Use guided forms and templates to report scams to the right authorities.
4. **Auto Report** – Access automated reporting options for efficiency.
5. **Actions** – Choose your next step:
    - **Protect Yourself**: Learn practical self-defense strategies (e.g., email subject line tricks, personal checklists).
    - **Fight Back**: Take action against scammers (e.g., request shutdowns, contact officials, bait scammers safely).
    - **Educate**: Deepen your understanding with interactive learning modules and real-world examples.

Users can freely navigate between steps, with their progress always visible.


## Key Features


### Verification Tools
- Upload and analyze suspicious messages or images
- Instantly check for common scam indicators
- Step-by-step anti-scam checklists

### Education Resources
- Learn about major scam types and tactics
- Discover red flags and warning signs
- Explore real-world scam case studies

### Reporting Mechanisms
- Direct reporting to authorities and platforms
- Automated reporting workflows for speed
- Downloadable report templates and best practices

### Protection Strategies
- Create unique email subject line identifiers
- Use word/number tricks to spot scams
- Personal security checklists and reminders

### Fighting Back Options
- Request shutdowns of scam websites/services
- Write to Congress or relevant officials
- Safe, ethical scam baiting tools
- Support anti-scam organizations with donations


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


## Getting Started

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


## How to Use

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


## Design Principles

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

*Created with care to help everyone stay safe online.*
