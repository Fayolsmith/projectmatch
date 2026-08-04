export interface DefenseCategory {
  categoryTitle: string;
  description: string;
  items: {
    question: string;
    selfCheckPrompt: string;
    defenseTip: string;
  }[];
}

export const DEFENSE_CHECKLIST: DefenseCategory[] = [
  {
    categoryTitle: '1. Problem Definition & Motivation',
    description: 'The panel will test whether you understand the real-world domain and scope of your project.',
    items: [
      {
        question: 'What specific problem does your system solve, and who is the target user?',
        selfCheckPrompt: 'Can you state the core problem in 2 sentences without using jargon?',
        defenseTip: 'Avoid claiming your project solves everything. Define precise, realistic scope boundaries.'
      },
      {
        question: 'Why is this project appropriate for a SIWES / CS final project?',
        selfCheckPrompt: 'Can you highlight the technical skills (algorithms, DB design, security, UI) applied during your industrial training?',
        defenseTip: 'Connect project design decisions to practical skills acquired or deepened during SIWES.'
      }
    ]
  },
  {
    categoryTitle: '2. System Architecture & Tech Stack Justification',
    description: 'Panels heavily scrutinize your tech stack choices and design patterns.',
    items: [
      {
        question: 'Why did you choose Technology X over Technology Y (e.g., PostgreSQL vs MongoDB, React vs Vue)?',
        selfCheckPrompt: 'Can you defend your choice using engineering trade-offs (data structure complexity, query speed, ecosystem)?',
        defenseTip: 'Never answer "because it was easy" or "because I like it". Use concrete technical trade-offs.'
      },
      {
        question: 'Can you draw/explain your system architecture diagram on a whiteboard without looking at your notes?',
        selfCheckPrompt: 'Do you know how data flows from the frontend/client to the database and back?',
        defenseTip: 'Practice sketching your high-level component diagram from memory before defense day.'
      }
    ]
  },
  {
    categoryTitle: '3. Algorithmic Understanding & Deep Technical Defense',
    description: 'This is where most students get stuck — demonstrating genuine ownership of their implementation.',
    items: [
      {
        question: 'Can you explain why you chose a specific data structure or algorithm without looking at your source code?',
        selfCheckPrompt: 'Do you know the time and space complexity (Big-O notation) of your core functions?',
        defenseTip: 'Panelists often pick one function and ask you to trace execution with custom sample inputs.'
      },
      {
        question: 'How does your application handle invalid inputs, race conditions, or edge cases?',
        selfCheckPrompt: 'What happens if a user submits malicious SQL/script payloads or duplicate network requests?',
        defenseTip: 'Be honest about edge cases handled and explicitly state input validation & sanitization rules.'
      }
    ]
  },
  {
    categoryTitle: '4. Testing, Validation & Performance',
    description: 'Demonstrating how you proved your code works reliably.',
    items: [
      {
        question: 'How did you test your system before final submission?',
        selfCheckPrompt: 'Did you write unit tests, integration tests, or perform structured manual test cases?',
        defenseTip: 'Be prepared to show your test suite results or test data matrix during demonstration.'
      },
      {
        question: 'What are the current limitations of your project, and how would you scale it in the future?',
        selfCheckPrompt: 'What would break if 10,000 concurrent users accessed your system right now?',
        defenseTip: 'Self-awareness of limitations impresses panels far more than defensive denial.'
      }
    ]
  }
];
