// Project data
export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Crypto Wallet dApp',
    description: 'A decentralized wallet application built with React, Ethers.js and Solidity smart contracts.',/*Features include token transfers, NFT gallery, and transaction history*/
    date: 'April 2025',
    liveUrl: 'https://basicwalletapp.netlify.app/',
    githubUrl: 'https://github.com/Anshulsatone/WalletApp',
  },
  {
    id: 2,
    number: '02',
    title: 'HealthAI',
    description: 'A comprehensive health management application that leverages AI to provide personalized health insights and recommendations. Built with React, Node.js, and MongoDB, it features user authentication, health tracking, and AI-driven analytics.',
    date: 'May 2025',
    liveUrl: 'https://health-ai-team154.vercel.app/',
    githubUrl: 'https://github.com/Anshulsatone/HealthAI-Team154',
  },
  {
    id: 3,
    number: '03',
    title: 'Bookstore Web App',
    description: 'A modern bookstore web application built with React and TypeScript, featuring a user-friendly interface for browsing and purchasing books.',
    date: 'November 2024',
    liveUrl: 'https://funny-youtiao-213081.netlify.app/',
    githubUrl: 'https://github.com/Anshulsatone/bookstore',
  },
  {
    id: 4,
    number: '04',
    title: ' To-Do List App',
    description: 'A simple and intuitive to-do list application built with React and TypeScript, featuring local storage for task persistence.',
    date: 'August 2024',
    liveUrl: 'https://to-do-list-anshul3.netlify.app/',
    githubUrl: 'https://github.com/Anshulsatone/To-do-list',
  },
];