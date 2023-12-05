export interface IrregularVerb {
  infinitive: string;
  pastSimple: string;
  participle: string;
  ru: string;
}

export interface Day {
  eng: string;
  ru: string;
}

export interface Month {
  eng: string;
  ru: string;
}

export interface SortingInterface {
  column: string;
  order: 'asc' | 'desc';
}
