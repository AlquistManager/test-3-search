
export interface Snippet {
  /* id : number; */
  answer: number;
  intent: string;
  country: string;
  year: number;
}  

export interface RetSnippet {
  results : string[];
}