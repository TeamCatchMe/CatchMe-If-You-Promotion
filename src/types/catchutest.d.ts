interface CatchuTestItem {
  index: string;
  question: string;
  answer: {
    a: string;
    b: string;
  };
  type: '성실성' | '개방성' | '외향성' | '우호성';
}
