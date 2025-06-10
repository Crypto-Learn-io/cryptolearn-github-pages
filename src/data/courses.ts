export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  modules: CourseModule[];
}

export const courses: Course[] = [
  {
    id: 'blockchain',
    title: 'Blockchain & Distributed Ledger Technology',
    description: 'Understand how blockchains work and why they matter.',
    overview: 'This course introduces the fundamentals of blockchain and distributed ledger technology.',
    image: 'https://images.unsplash.com/photo-1581091012184-7c93de72f67b?auto=format&w=800',
    modules: [
      {
        title: 'Introduction to Blockchain',
        lessons: ['What is a ledger?', 'Consensus mechanisms']
      },
      {
        title: 'Real-World Applications',
        lessons: ['Smart contracts', 'Use cases']
      }
    ]
  },
  {
    id: 'defi',
    title: 'Decentralized Finance (DeFi)',
    description: 'Explore financial services built on public blockchains.',
    overview: 'Learn how DeFi is changing lending, borrowing and trading.',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb9649c779b?auto=format&w=800',
    modules: [
      {
        title: 'DeFi Basics',
        lessons: ['What is DeFi?', 'Benefits and risks']
      },
      {
        title: 'Popular Protocols',
        lessons: ['Decentralized exchanges', 'Lending platforms']
      }
    ]
  },
  {
    id: 'payments',
    title: 'Digital Payments & Embedded Finance',
    description: 'Discover modern payment rails and integration.',
    overview: 'Understand how digital wallets and embedded finance enable seamless transactions.',
    image: 'https://images.unsplash.com/photo-1518544881718-6d6dbb5ccb7a?auto=format&w=800',
    modules: [
      {
        title: 'Payments 101',
        lessons: ['Payment processors', 'Mobile wallets']
      },
      {
        title: 'Embedded Finance',
        lessons: ['Banking as a service', 'Fintech APIs']
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning in Finance',
    description: 'See how algorithms help make financial decisions.',
    overview: 'This course covers machine learning techniques used in finance from trading to credit scoring.',
    image: 'https://images.unsplash.com/photo-1534759846116-579a091b1aab?auto=format&w=800',
    modules: [
      {
        title: 'ML Basics',
        lessons: ['Supervised vs unsupervised', 'Model evaluation']
      },
      {
        title: 'Finance Applications',
        lessons: ['Algorithmic trading', 'Risk management']
      }
    ]
  },
  {
    id: 'crypto-assets',
    title: 'Cryptocurrencies & Digital Assets',
    description: 'Learn about Bitcoin, Ethereum and other digital assets.',
    overview: 'Examine how cryptocurrencies are created, traded and stored.',
    image: 'https://images.unsplash.com/photo-1629878288481-e54ef09bfd8f?auto=format&w=800',
    modules: [
      {
        title: 'Major Coins',
        lessons: ['Bitcoin overview', 'Ethereum ecosystem']
      },
      {
        title: 'Storing Assets',
        lessons: ['Wallet types', 'Security best practices']
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity in Fintech',
    description: 'Keep financial technology safe from threats.',
    overview: 'Understand common fintech security risks and how to mitigate them.',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&w=800',
    modules: [
      {
        title: 'Threat Landscape',
        lessons: ['Phishing', 'Social engineering']
      },
      {
        title: 'Protecting Data',
        lessons: ['Encryption basics', 'Regulations']
      }
    ]
  },
  {
    id: 'wealthtech',
    title: 'Robo-Advisors & WealthTech',
    description: 'Automated investing platforms explained.',
    overview: 'Learn how robo-advisors use algorithms to manage portfolios.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&w=800',
    modules: [
      {
        title: 'How Robo-Advisors Work',
        lessons: ['Asset allocation', 'Rebalancing']
      },
      {
        title: 'Future of WealthTech',
        lessons: ['Personalization', 'Regulation challenges']
      }
    ]
  },
  {
    id: 'insurtech',
    title: 'InsurTech',
    description: 'Innovation in the insurance industry.',
    overview: 'Explore how technology is transforming insurance products and services.',
    image: 'https://images.unsplash.com/photo-1581091012184-7e0b6e649e60?auto=format&w=800',
    modules: [
      {
        title: 'Digital Insurance Basics',
        lessons: ['Telematics', 'Usage-based policies']
      },
      {
        title: 'Claims Automation',
        lessons: ['AI for claims', 'Fraud detection']
      }
    ]
  }
];
