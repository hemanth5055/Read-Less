declare global {
  interface Note {
    id: string;
    name: string;
    shortDesc: string;
    content: string;
    url: string;
    userId: string;
    createdAt: Date;
  }
  interface User {
    id: string;
    name: string;
    credits: number;
  }
}
export {};
